SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
;
;
;
;
CREATE TABLE `comptes` (
  `id_compte` int(4) NOT NULL,
  `nom_compte` varchar(50) NOT NULL,
  `prenom_compte` varchar(30) NOT NULL,
  `login_compte` varchar(50) NOT NULL,
  `pass_compte` blob NOT NULL,
  `statut_compte` varchar(15) NOT NULL,
  `fichier_compte` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
INSERT INTO `comptes` (`id_compte`, `nom_compte`, `prenom_compte`, `login_compte`, `pass_compte`, `statut_compte`, `fichier_compte`) VALUES
(12, 'Hyron', 'Olivier', 'olive', 0x30623963323632356463323165663035663661643464646634376335663230333833376161333263, 'user', '../medias/profil12.jpg'),
(10, 'Hyron', 'Olivier', 'admin', 0x30623963323632356463323165663035663661643464646634376335663230333833376161333263, 'admin', '../medias/profil10.jpg');
CREATE TABLE `contacts` (
  `id_contact` int(5) NOT NULL,
  `nom_contact` varchar(50) NOT NULL,
  `prenom_contact` varchar(30) NOT NULL,
  `mel_contact` varchar(250) NOT NULL,
  `message_contact` text NOT NULL,
  `date_contact` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;
INSERT INTO `contacts` (`id_contact`, `nom_contact`, `prenom_contact`, `mel_contact`, `message_contact`, `date_contact`) VALUES
(7, 'dfdfd', 'dfdf', 'zelanterne3@gmail.com', 'fdsff', '2020-01-17 15:23:17'),
(10, 'dfrfedf', 'htrhythg', 'zelanterne3@gmail.com', 'fdgfgfg', '2020-01-17 15:25:17'),
(13, 'hyron', 'olivier', 'olivier.hyron@gmail.com', 'test', '2022-04-29 05:44:23');
CREATE TABLE `produits` (
  `id_produit` int(4) NOT NULL,
  `nom_produit` varchar(50) NOT NULL,
  `description_produit` text NOT NULL,
  `photo_produit` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO `produits` (`id_produit`, `nom_produit`, `description_produit`, `photo_produit`) VALUES
(1, 'Snow Nitro illusion 158', 'They say we live in the moment, that the past is always gone, and each day is something new, a stepping stone into a future we dream of even in the cold. For me, that is snow, that is those wintry days of bluster and ice. I see the earth of yesterday covered as white as any new page and the toddler in me rises as if armed with a rainbow of crayons, eager to set that right. Yet today, I\'m happy to simply walk in it, create a few footprints of my own. I watch them tumble, those feathered crystals, their chaotic flight to form a blanket that could not be more uniform, more orderly. Yet for some their destination is to come to my hand, to alight upon these ungloved fingers and let my warmth be their spring melt.', '../images/produit1.jpg'),
(2, 'Snow Burton 158 P20', 'They say we live in the moment, that the past is always gone, and each day is something new, a stepping stone into a future we dream of even in the cold. For me, that is snow, that is those wintry days of bluster and ice. I see the earth of yesterday covered as white as any new page and the toddler in me rises as if armed with a rainbow of crayons, eager to set that right. Yet today, I\'m happy to simply walk in it, create a few footprints of my own. I watch them tumble, those feathered crystals, their chaotic flight to form a blanket that could not be more uniform, more orderly. Yet for some their destination is to come to my hand, to alight upon these ungloved fingers and let my warmth be their spring melt.', '../images/produit2.jpg');
ALTER TABLE `comptes`
  ADD PRIMARY KEY (`id_compte`),
  ADD UNIQUE KEY `login_compte` (`login_compte`);
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id_contact`);
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id_produit`);
ALTER TABLE `comptes`
  MODIFY `id_compte` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
ALTER TABLE `contacts`
  MODIFY `id_contact` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
ALTER TABLE `produits`
  MODIFY `id_produit` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
;
;
;