<?php
/**
 * Created by PhpStorm.
 * User: zachary
 * Date: 7/17/18
 * Time: 7:51 PM
 */

$basepath = realpath("/home/zach/android/lineage/out/target/product/");

if (isset($_GET["file_name"]) && isset($_GET["model"])) {
    $file = urldecode($_GET['file_name']);
    $model = urldecode($_GET['model']);
    $path = $basepath."/".$model."/".$file;

    $path = str_replace("../", "", $path);

    if (file_exists($path)) {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);

        header("Content-Description: File Transfer");
        header("Content-Type: ".finfo_file($finfo, $path));
        header("Content-Length: ".filesize($path));
        header('Content-Disposition: attachment; filename="'.$file.'"');
        header("Content-Type: binary/octet-stream");

        finfo_close($finfo);

        ob_clean();
        flush();

        readfile($path);
    } else {
        echo "$file not found";
    }
} else {
    echo "Property file_name not set";
}

