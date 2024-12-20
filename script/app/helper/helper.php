<?php

use App\Models\Tenant;
use App\Terms;
use App\Models\Option;
use App\Models\Menu;
use Amcoders\Lpress\Lphelper;
use App\Models\Category;
use App\Models\Term;
use GuzzleHttp\Client;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;



/*
replace image name via $name from $url
*/
function ImageSize($url,$name){
	$img_arr=explode('.', $url);
	$ext='.'.end($img_arr);
	$newName=str_replace($ext, $name.$ext, $url);
	return $newName;
}

function get_planinfo($key)
{
	$plan_info=json_decode(tenant('plan_info'));
    return $plan_info->$key ?? null;
}

function get_option($key,$decode=false)
{
	$option=\App\Models\Option::where('key',$key)->first();
	return $decode == false ? $option->value ?? '' : json_decode($option->value ?? '');

}

function load_whatsapp(){
	return view('components.whatsapp');
}

function load_header(){
	return view('components.load_header');
}

function load_footer(){
	return view('components.load_footer');
}

function getautoloadquery()
{
	if (env('CACHE_DRIVER') == 'memcached' || env('CACHE_DRIVER') == 'redis') {
		return Cache::remember('autoload', 420, function (){
			$queries=Option::where('autoload',1)->get();

			foreach ($queries as $key => $row) {
				$data[$row->key]=$row->value;
			}

			return $data ?? [];
		});
	}
	else{
		$queries=Option::where('autoload',1)->get();

		foreach ($queries as $key => $row) {
			$data[$row->key]=$row->value;
		}

		return $data ?? [];
	}


}

function optionfromcache($key)
{
	if (env('CACHE_DRIVER') == 'memcached' || env('CACHE_DRIVER') == 'redis'){
		return Cache::remember($key, 420, function () use ($key) {
			$option=\App\Models\Option::where('key',$key)->first();
			return json_decode($option->value ?? '');
		});

	}
	else{
		$option=\App\Models\Option::where('key',$key)->first();
		return json_decode($option->value ?? '');
	}


}

// old not optimized function

function gravatar($email)
{
    $hash = md5(strtolower(trim($email)));
    $uri = "localhost" ?? "https://www.gravatar.com/avatar/{$hash}?d=404";

    $client = new Client();
    $response = $client->get($uri, ['http_errors' => false]);

    if ($response->getStatusCode() !== 200)
    {
        return "https://www.gravatar.com/avatar/{$hash}?s=80&d=mp";
    }
    else
    {
        return "https://www.gravatar.com/avatar/{$hash}?s=200";
    }
}


// new optimized function for better performance
// function gravatar($email) {
//     $hash = md5(strtolower(trim($email)));
//     $url = "https://www.gravatar.com/avatar/{$hash}?s=100";
//     $curl = curl_init();
//     curl_setopt($curl, CURLOPT_URL, $url);
//     curl_setopt($curl, CURLOPT_HEADER, true);
//     curl_setopt($curl, CURLOPT_NOBODY, true);
//     curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
//     curl_exec($curl);
//     $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
//     curl_close($curl);

//     if ($status != 200) {
//         $url .= "&d=mp";
//     }

//     return $url;
// }

function baseview($page){

	if (tenant('theme') != null) {
		if (file_exists(base_path('resources/views/'.tenant('theme').'/'.$page.'.blade.php'))) {
			return str_replace('/','.',tenant('theme')).'.'.$page;
		}
		return '404';
	}
	return 'theme.resto.'.$page;
}

function theme_trans($key)
{
	return $key;
}

function amount_format($number)
{
	return number_format($number,2);
}

function TenantCacheClear($key)
{
	return env('CACHE_DRIVER') == 'memcached' || env('CACHE_DRIVER') == 'redis'  ? \Cache::forget($key) : true;
}


function imageSizes()
{
	$sizes='[{"key":"small","height":"80","width":"80"}]';
	return $sizes;
}

function amount_admin_format($value=0)
{
	return number_format($value,2);
}

function folderSize($dir){
    $file_size = 0;
    if (!file_exists($dir)) {
        return $file_size;
    }

    foreach(\File::allFiles($dir) as $file)
    {
        $file_size += $file->getSize();
    }


    return $file_size = str_replace(',', '', number_format($file_size / 1048576,2));

}

function ThemeMenu($position,$path){
	$locale=\Session::get('locale');

	$menus=cache()->remember($position.$locale, 300, function () use ($position,$locale) {

			$menus=Menu::where('position',$position)->where('lang',$locale)->first();
			$data['data'] = json_decode($menus->data ?? '');
			$data['name'] = $menus->name ?? '';
			return $data;
		});

	return view($path.'.parent',compact('menus'));
}
function ThemeFooterMenu($position,$path){


	$locale=\Session::get('locale');

	$menus=cache()->remember($position.$locale, 300, function () use ($position,$locale) {

			$menus=Menu::where('position',$position)->where('lang',$locale)->first();
			$data['data'] = json_decode($menus->data ?? '');
			$data['name'] = $menus->name ?? '';
			return $data;
		});
	return view($path.'.parent',compact('menus'));
}

function getpermission($role)
{
	$permissions=Auth::user()->permissions;
	$permissions=json_decode($permissions ?? '');

	$arr=[];

	foreach($permissions as $row){
		array_push($arr,$row);
	}


	if (in_array($role,$arr)) {
		return true;
	}
	return false;



}


 /**
 * genarate frontend menu.
 *
 * @param $position=menu position
 * @param $ul=ul class
 * @param $li=li class
 * @param $a=a class
 * @param $icon= position left/right
 * @param $lang= translate true or false
 */

function Menu($position,$ul='',$li='',$a='',$icon_position='top',$lang=false)
{
	return Lphelper::Menu($position,$ul,$li,$a,$icon_position,$lang);
}

 /**
 * genarate frontend menu.
 *
 * @param $position=menu position
 * @param $ul=ul class
 * @param $li=li class
 * @param $a=a class
 * @param $icon= position left/right
 * @param $lang= translate true or false
 */

function MenuCustom($position,$ul='',$li='',$a='',$icon_position='top',$lang=false)
{
	return Lphelper::MenuCustom($position,$ul,$li,$a,$icon_position,$lang);
}


function NastedCategoryList($type,$selected = [],$ignore_id=null){
	$categories=\App\Models\Category::where('type',$type)
				->whereNull('category_id')
				->select('id','name','category_id')
				->where('type',$type)
			    ->with('childrenCategories')
			    ->latest()
			    ->get();

	return parentCategory($categories,$selected,$ignore_id);

}

function parentCategory($categories, $selected=[],$ignore_id=null){
	$i=0;
	foreach ($categories as $key => $category) {

			$disabled= $ignore_id == $category->id ? "disabled" : '';
			$confirm='';
			if (is_array($selected)) {
				if (in_array($category->id, $selected)) {
					$confirm="selected";
				}
			}
			elseif(!is_array($selected)){
				if ($category->id == $selected) {
					$confirm="selected";
				}
			}

		echo "<option ".$confirm." value=".$category->id." ".$disabled.">".$category->name."</option>";
		if (!empty($category->childrenCategories)) {
			foreach($category->childrenCategories as   $childCategory){
				echo childCategory($childCategory,$selected,$i,$ignore_id);
			}

		}
	}
}

function childCategory($child_category, $select=[],$i=0,$ignore_id=null)
{
	$i++;

	$confirm='';
	if (is_array($select)) {
		if (in_array($child_category->id, $select)) {
			$confirm="selected";
		}
	}
	elseif(!is_array($select)){
		if ($child_category->id == $select) {
			$confirm="selected";
		}
	}
	$nbsp='';
	for($j=0; $j < $i ; $j++){
		$nbsp .='¦– ';
	}

	$disabled= $ignore_id == $child_category->id ? "disabled" : '';


	echo $html="<option ".$disabled." ".$confirm." value=".$child_category->id." > ".$nbsp."
    ".$child_category->name."</option>";

    if ($child_category->categories){
    	foreach ($child_category->categories as $key => $childCategory){
    		return childCategory($childCategory,$select,$i,$ignore_id);
    	}
    }


}

/*
return total active language
*/
function adminLang($c='')
{
	return Lphelper::AdminLang($c);
}




function mediasingle()
{
  return view('components.media.mediamodal');
}

function input($array = [])
{
	$title = $array['title'] ?? 'title';
	$type = $array['type'] ?? 'text';
	$placeholder = $array['placeholder'] ?? '';
	$name = $array['name'] ?? 'name';
	$id = $array['id'] ?? '';
	$value = $array['value'] ?? '';
	$min_input = $array['min_input'] ?? '';
	$max_input = $array['max_input'] ?? '';
	$step = $array['step'] ?? '';
	if (isset($array['is_required'])) {
		$required = $array['is_required'];
	}
	else{
		$required = false;
	}
	return view('components.input',compact('title','step','max_input','min_input','type','placeholder','name','id','value','required'));
}

function textarea($array = [])
{
	$title=$array['title'] ?? '';
	$id=$array['id'] ?? '';
	$name=$array['name'] ?? '';
	$placeholder=$array['placeholder'] ?? '';
	$maxlength=$array['maxlength'] ?? '';
	$cols=$array['cols'] ?? 30;
	$rows=$array['rows'] ?? 3;
	$class=$array['class'] ?? '';
	$value=$array['value'] ?? '';
	$is_required=$array['is_required'] ?? false;
	return view('components.textarea',compact('title','placeholder','name','id','value','is_required','class','cols','rows','maxlength'));
}

function editor($array = [])
{
	$title=$array['title'] ?? '';
	$id=$array['id'] ?? 'content';
	$name=$array['name'] ?? '';
	$cols=$array['cols'] ?? 30;
	$rows=$array['rows'] ?? 10;
	$class=$array['class'] ?? '';
	$value=$array['value'] ?? '';

	return view('components.editor',compact('title','name','id','value','class','cols','rows'));
}

function publish($array = [])
{
	$title=$array['title'] ?? 'Publish';
	$button_text=$array['button_text'] ?? 'Save';
	$class=$array['class'] ?? '';
	$id=$array['id'] ?? '';
	return view('components.publish',compact('title','button_text','class','id'));
}

function mediasection($array = [],$blade_name="section1")
{
	$title=$array['title'] ?? 'Image';
	$preview_class=$array['preview_class'] ?? 'input_preview';
	$preview=$array['preview'] ?? 'admin/img/img/placeholder.png';
	$input_id=$array['input_id'] ?? 'preview';
	$input_class=$array['input_class'] ?? 'input_image';
	$input_name=$array['input_name'] ?? 'preview';
	$value=$array['value'] ?? '';
	return view('components.media.'.$blade_name,compact('title','preview_class','preview','input_id','input_class','input_name','value'));
}

function mediasectionmulti($array = [],$blade_name="multimediasection1")
{
	$title=$array['title'] ?? 'Image';
	$preview_id=$array['preview_id'] ?? 'preview';
	$preview=$array['preview'] ?? 'admin/img/img/placeholder.png';
	$input_id=$array['input_id'] ?? 'preview_input';
	$input_class=$array['input_class'] ?? 'input_image';
	$input_name=$array['input_name'] ?? 'preview';
	$area_id=$array['area_id'] ?? 'gallary-img';
	$value=$array['value'] ?? [];
	$preview_class=$array['preview_class'] ?? 'multi_gallery';
	return view('components.media.'.$blade_name,compact('title','preview_class','preview_id','preview','input_id','input_class','input_name','value','area_id'));
}



function mediamulti()
{
	return view('components.media.multiplemediamodel');
}




/*
return admin category
*/

function  AdminCategory($type)
{
	 return Lphelper::LPAdminCategory($type);
}

/*
return category selected
*/

function AdminCategoryUpdate($type,$arr = []){

	 return Lphelper::LPAdminCategoryUpdate($type,$arr);
}




function content_format($data){
	return view('components.content',compact('data'));
}




function put($content,$root)
{
	$content=file_get_contents($content);
	File::put($root,$content);
}

function id(){
	return "36396789";
}

function currency_symbol()
{
	$symbol = Option::where('key','currency_symbol')->first();

	return $symbol->value ?? '£';
}

function currency_name()
{
	$name = Option::where('key','currency_name')->first();

	return $name->value ?? 'SDG';
}

function currency()
{
	return $currency=get_option('currency');

}




function postlimitcheck($type = true){
	if ($type == true) {
		if ((int)tenant('post_limit') != -1) {
			$category=Category::count();
		    $term=Term::count();
		    $total_count=$category+$term;

		    (int)tenant('post_limit') <= $total_count ? $status= false : $status= true;

		    return $status;
		}
		return true;
   }

   	if ((int)tenant('post_limit') == -1) {
   		return 99999999;
   	}

	if ($type == false) {
		$category=Category::count();
		$term=Term::count();
		$total_count=$category+$term;
		return $total_count;
	}

}

// Added by mutaman for date format

function formatDate($timestamp)
{
    if (!empty($timestamp)) {
        return date('Y-m-d / H:i', strtotime($timestamp));
    }
}

// Added by mutaman for uploads_path
if (!function_exists('uploads_path')) {
    function uploads_path($path = '')
    {
        $parentDir = dirname(base_path());
        return $parentDir . '/uploads/' . ltrim($path, '/');
    }
}


// Added by mutaman for random file

function getRandomFileUrl($directory, $index) {
    $files = File::allFiles(uploads_path($directory));
    $currentFileIndex = ($index - 0) % count($files);
    $randomFile = $files[$currentFileIndex]->getRelativePathname();
    // return env('APP_URL') . "/uploads/$directory/$randomFile";
	return url("/uploads/$directory/$randomFile");

}


function generateBanners($count, $bannerType, $bannerWidth, $bannerLocation) : array
{
    $banners = [];

    for ($i = 1; $i <= $count; $i++) {
        // $name = $faker->unique()->sentence();
        $banners[] = [
            "name" => 'Banner',
            'slug' => '{"link":"#","button_text":"Order Now","banner_width":"' . $bannerWidth . '","banner_location":"' . $bannerLocation . '"}',
            "type" => $bannerType,
            "category_id" => NULL,
            "featured" => 0,
            'menu_status' => 0,
            "status" => 1,
            "created_at" => now()->toDateTimeString(),
            "updated_at" => now()->toDateTimeString(),
        ];
    }
    return $banners;
}

/**
 * Get the selected store ID from the request or default to the first store.
 *
 * @param Request $request
 * @return string|null
 */
function getSelectedStoreId(Request $request): ?string
{
    $stores = Tenant::where('user_id', Auth::id())->get();

    $storeId = $request->cookie('activeStore'); // Get the selected store ID from cookies

    // If no `store_id` is provided, default to the first store
    if (!$storeId && $stores->isNotEmpty()) {
        $storeId = $stores->first()->id;
    }

    return $storeId;
}
