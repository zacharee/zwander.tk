<?php
/**
 * Created by PhpStorm.
 * User: zachary
 * Date: 7/17/18
 * Time: 5:20 PM
 */

$extensions = [
    0 => "zip",
    1 => "img"
];

$dir = realpath("/home/zach/android/lineage/out/target/product/h918/");

$return_array = [];

$files = array();
foreach (scandir($dir) as $file) {
    $files[$file] = filemtime($dir . '/' . $file);
}

arsort($files);
$files = array_keys($files);

foreach ($files as $value) {
    $ext = pathinfo($value, PATHINFO_EXTENSION);
    if (! in_array($ext, $extensions)) {
        unset($files[array_search($value, $files)]);
    } else {
        $time = filemtime($dir."/".$value);
        $return_array[$value] = $time."/".filesize($dir."/".$value);
    }
}

echo json_encode($return_array);