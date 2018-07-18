<?php
/**
 * Created by PhpStorm.
 * User: zachary
 * Date: 7/17/18
 * Time: 7:51 PM
 */

$path = "/home/zach/android/lineage/out/target/product/h918/".$_POST["file_name"];

header("Cache-Control: private");
header("Content-Description: File Transfer");
header("Content-Type: application/octet-stream");
header("Content-Length: " .(string)(filesize($path)) );
header('Content-Disposition: attachment; filename="'.basename($path).'"');
header("Content-Transfer-Encoding: Binary");

ob_clean();
flush();

readfile($path);

exit();