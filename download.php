<?php
/**
 * Created by PhpStorm.
 * User: zachary
 * Date: 7/17/18
 * Time: 7:51 PM
 */

$basepath = realpath("/home/zach/android/lineage/out/target/product/h918/");

if (isset($_GET["file_name"])) {
    $file = urldecode($_GET['file_name']);
    $path = $basepath."/".$file;

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

        echo "Downloading $file";

        readfile($path);
    } else {
        echo "$file not found";
    }
} else {
    echo "Property file_name not set";
}

