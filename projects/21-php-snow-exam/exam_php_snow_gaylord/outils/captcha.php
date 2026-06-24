<?php
session_start();

$ncarac =5;

$nlignes =6;

$carac = array('2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
$nca = count($carac);

$font =__DIR__ .  "/adler.ttf";

$x = $ncarac*30+20;
$y = 40;

$img = imagecreatetruecolor($x,$y);

imagealphablending($img, false);
imagefill($img,0,0,0x7fff0000);
imagesavealpha($img, true);

$chaine = "";
for($i=1;$i<=$ncarac;$i++)
	{
	$c = $carac[rand(0,($nca-1))];

	imagettftext($img, 25, rand(-10,10), (($i-1)*30)+5, 30, imagecolorallocate($img, rand(0,100), rand(0,100), rand(0,100)),$font, $c);
	$chaine .= $c;
	}

for($i=1;$i<=$nlignes;$i++)
	{
	imagesetthickness($img,rand(1,2));
	imageline($img,rand(0,$x),rand(0,$y),rand(0,$x),rand(0,$y), imagecolorallocate($img, rand(0,100), rand(0,100), rand(0,100)));
	}

$_SESSION['captcha'] = $chaine;

header('Content-type: image/png');
imagepng($img);

?>