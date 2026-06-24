<?php

function security($chaine){
	$connexion=connexion();
	$security=addcslashes(mysqli_real_escape_string($connexion,$chaine), "%_");
	mysqli_close($connexion);
	return $security;
}

function login($login,$password)
	{
	$connexion=connexion();
	$login=security($login);
	$password=security($password);

	$requete="SELECT * FROM comptes
				WHERE login_compte= '" . $login . "'
				AND pass_compte=SHA1('" . $password . "')";

	$resultat=mysqli_query($connexion, $requete) or die(mysqli_connect_error());

	$nb=mysqli_num_rows($resultat);

	if($nb==0)
		{
		return false;
		}
	else
		{
		$ligne=mysqli_fetch_object($resultat);

		$_SESSION['id_compte']=$ligne->id_compte;

		$_SESSION['prenom_compte']=$ligne->prenom_compte;
		$_SESSION['nom_compte']=$ligne->nom_compte;
		$_SESSION['retour_bo']="<a id=\"retour_bo\" href=\"../admin/admin.php\"><span class=\"dashicons dashicons-arrow-left-alt\"></span></a>\n";
		header("Location:../admin/admin.php");
		return true;
		}
	mysqli_close($connexion);
	}

function fichier_type($uploadedFile)
{
$tabType = explode(".", $uploadedFile);
$nb=sizeof($tabType)-1;
$typeFichier=$tabType[$nb];
 if($typeFichier == "jpeg")
   {
   $typeFichier = "jpg";
   }
$extension=strtolower($typeFichier);
return $extension;
}

function redimage($img_src,$img_dest,$dst_w,$dst_h,$quality)
{
if(!isset($quality))
	{
	$quality=100;
	}
   $extension=fichier_type($img_src);

   $size = @GetImageSize($img_src);
   $src_w = $size[0];
   $src_h = $size[1];

   $dst_im = @ImageCreatetruecolor($dst_w,$dst_h);
   imagealphablending($dst_im, false);
   imagesavealpha($dst_im, true);

   if($extension=="jpg")
     {
     $src_im = @ImageCreateFromJpeg($img_src);
     imagecopyresampled($dst_im,$src_im,0,0,0,0,$dst_w,$dst_h,$src_w,$src_h);

     @ImageJpeg($dst_im,$img_dest,$quality);
     }
   if($extension=="png")
     {
     $src_im = @ImageCreateFromPng($img_src);
     imagecopyresampled($dst_im,$src_im,0,0,0,0,$dst_w,$dst_h,$src_w,$src_h);

     @ImagePng($dst_im,$img_dest,0);
     }
   if($extension=="gif")
     {
     $src_im = @ImageCreateFromGif($img_src);
     imagecopyresampled($dst_im,$src_im,0,0,0,0,$dst_w,$dst_h,$src_w,$src_h);

     @ImagePng($dst_im,$img_dest,0);
     }

   @ImageDestroy($dst_im);
   @ImageDestroy($src_im);
}

function connexion()
{
  require_once("connect.php");

  $connexion = mysqli_connect(SERVEUR,LOGIN,PASSE,BASE) or die("Error " . mysqli_error($connexion));

  return $connexion;
}

 function envoi_mel($destinataire,$sujet,$message_txt, $message_html,$expediteur)
  {
  if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $destinataire))
    {
  	$passage_ligne = "\r\n";
    }
  else
    {
  	$passage_ligne = "\n";
    }

  $boundary = "-----=" . md5(rand());

  $header = "From: \"" . $_SESSION['expediteur'] . "\"<" . $expediteur . ">" . $passage_ligne;
  $header.= "Reply-to: \"" . $_SESSION['expediteur'] . "\" <" . $expediteur . ">" . $passage_ligne;
  $header.= "MIME-Version: 1.0" . $passage_ligne;
  $header.= "X-Priority: 3" . $passage_ligne;
  $header.= "Content-Type: multipart/alternative;" . $passage_ligne . " boundary=\"" . $boundary . "\"" . $passage_ligne;

  $message = $passage_ligne . "--" . $boundary. $passage_ligne;

  $message.= "Content-Type: text/plain; charset=\"UTF-8\"" . $passage_ligne;
  $message.= "Content-Transfer-Encoding: 8bit" . $passage_ligne;
  $message.= $passage_ligne . $message_txt . $passage_ligne;

  $message.= $passage_ligne . "--" . $boundary . $passage_ligne;

  $message.= "Content-Type: text/html; charset=\"UTF-8\"" . $passage_ligne;
  $message.= "Content-Transfer-Encoding: 8bit" . $passage_ligne;
  $message.= $passage_ligne . $message_html . $passage_ligne;

  $message.= $passage_ligne . "--" . $boundary."--" . $passage_ligne;
  $message.= $passage_ligne . "--" . $boundary."--" . $passage_ligne;

  mail($destinataire,$sujet,$message,$header);
  }

function afficher_produits(){
	$connexion=connexion();
	$requete="SELECT * FROM produits ORDER BY nom_produit";
	$resultat=mysqli_query($connexion, $requete);
	$liste="<table id=\"liste\">\n";
	$liste.="<tr>";
	$liste.="<th>Nom du produit</th>";
	$liste.="<th>Description</th>";
	$liste.="<th>Prix</th>";
	$liste.="<th>Apercu</th>";
	$liste.="<th>Actions</th>";
	$liste.="</tr>";
	while($ligne=mysqli_fetch_object($resultat))
		{
		$liste.="<tr>";
		$liste.="<td>" . $ligne->nom_produit . "</td>";
		$liste.="<td>" . $ligne->description_produit . "</td>";
		$liste.="<td>" . $ligne->prix_produit . "</td>";
		$liste.="<td><img src=\"" . $ligne->photo_produit . "\"
		alt=\"" . $ligne->nom_produit . "\" /></td>";
		$liste.="<td><a href=\"admin.php?action=produit&cas=modifier&id_produit=".$ligne->id_produit."\">modifier</a>&nbsp;
		&nbsp;<a href=\"admin.php?action=produit&cas=supprimer&id_produit=".$ligne->id_produit."\">supprimer</a></td>";
		$liste.="</tr>";
		}
	$liste.="</table>\n";

	mysqli_close($connexion);
	return $liste;
}

function afficher_contacts(){
	$connexion=connexion();
	$requete="SELECT * FROM contacts ORDER BY date_contact DESC";
	$resultat=mysqli_query($connexion, $requete);
	$liste="<table id=\"liste\">\n";

	$liste.="</table>\n";

	mysqli_close($connexion);
}
?>