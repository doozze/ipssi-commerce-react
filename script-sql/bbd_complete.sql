-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 19 nov. 2021 à 15:51
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ipssi_react`
--

DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `affAvisVendeur` (IN `id` INT(11))  SELECT avis.id_client, avis.texte, avis.note_vendeur FROM avis WHERE avis.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `affiProd` (IN `p_id` INT(3) UNSIGNED)  SELECT * FROM `produit` WHERE id = 'p_id'$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `affStockFaible` ()  SELECT `produit`.`id`, `produit`.`nom_produit`, `produit`.`prix`, `produit`.`description`, `produit`.`photo`, `produit`.`note`, `vendeur`.`nom_boutique`, `produit`.`stock` FROM `produit`, `vendeur` WHERE `stock` <= 1 AND `produit`.`id_vendeur`=`vendeur`.`id`$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `aff_tous_les_produits` ()  SELECT * FROM `produit`$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `callAllCommande` ()  SELECT * FROM commande$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `callSingleCommande` (IN `v_id` INT(4))  SELECT * FROM `commande` WHERE commande.id = v_id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `connexionClient` (IN `v_mail` VARCHAR(255), IN `v_password` VARCHAR(255), OUT `con` INT(3))  SELECT count(*) into con from client
where client.mail = v_mail AND client.password = v_password$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `createCodePromo` (IN `v_code` VARCHAR(255), IN `v_pourcentageReduction` INT(2))  INSERT INTO codepromo(code, pourcentageReduction)
VALUES (v_code, v_pourcentageReduction)$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `createCommande` (IN `v_id_client` INT(4), IN `v_statut` VARCHAR(255), IN `v_montant` FLOAT(3), IN `v_id_codePromo` INT(4))  INSERT INTO `commande`(`id_client`, `statut`, `montant`, `id_codePromo`) 
VALUES (v_id_client, v_statut, v_montant, v_id_codePromo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteAddresse` (IN `id` INT(11))  DELETE from adresse WHERE adresse.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteClient` (IN `id` INT(11))  delete from client WHERE client.id = id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `deleteCodePromo` (IN `v_id` INT(3))  DELETE FROM `codepromo` WHERE codepromo.id = v_id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `deleteCommande` (IN `v_id` INT(4))  DELETE FROM `commande` WHERE `commande`.`id`= v_id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `deleteProduit` (IN `p_id` INT(3) UNSIGNED)  DELETE FROM `produit` WHERE id = 'p_id'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteVendeur` (IN `id` INT(11))  DELETE FROM vendeur where vendeur.id=id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAddresse` (IN `id` INT(11))  select * from adresse where adresse.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getClient` (IN `id` INT(11))  select * from client where client.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getCommande` (IN `id` INT(11))  SELECT * from commande WHERE commande.id = id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `getMailVendeur` (IN `v_id_v` INT(11))  SELECT client.mail FROM vendeur, client
where client.id = vendeur.id_client and vendeur.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getProduit` (IN `id` INT(11))  SELECT * from produit WHERE produit.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertAddresse` (IN `v_numero` INT(3), IN `v_nom` VARCHAR(255), IN `v_ville` VARCHAR(255), IN `v_code_postal` VARCHAR(255), IN `v_note` VARCHAR(255))  INSERT INTO adresse(numero_voie, voie, ville, code_postal, note)
VALUES (v_numero, v_nom, v_ville, v_code_postal, v_note)$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `insertAvis` (IN `v_text` VARCHAR(1000), IN `id_v` INT(11), IN `id_c` INT(11), IN `v_note` INT(2))  INSERT INTO avis (`id_vendeur`, `id_client`, `texte`, `note_vendeur`) VALUES (id_v, id-c, v_text, v_note)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertClient` (IN `v_nom` VARCHAR(255), IN `v_prenom` VARCHAR(255), IN `v_mail` VARCHAR(255), IN `v_adresse_id` INT(11), IN `v_tel` VARCHAR(10), IN `v_password` VARCHAR(255))  INSERT INTO `client`( `nom`, `prenom`, `mail`, `id_adresse`, `tel`, `password`) VALUES (v_nom, v_prenom, v_mail, v_adresse_id ,v_tel,v_password)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertCommande` (IN `client_id` INT(11), IN `v_status` VARCHAR(255), IN `codePromo_id` INT(11))  INSERT INTO commande(id_client, statut, id_codePromo) VALUES (client_id, v_status, codePromo_id)$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `insertLigneCommande` (IN `v_id_produit` INT(4), IN `v_nb` INT(2), IN `v_id_commande` INT(4))  INSERT INTO `ligne_commande`(`id_produit`, `nombre`, `id_commande`) 
VALUES (`v_id_produit`, `v_nombre`, `v_id_commande`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertLivraison` (IN `l_statut` VARCHAR(250) CHARSET utf8, IN `l_date_exp` DATE, IN `l_numero_suivi` INT(15) UNSIGNED, IN `l_date_livraison` DATE, IN `l_id_commande` INT(3) UNSIGNED)  INSERT INTO `livraison`(`statut`, `date_expe`, `numero_suivi`, `date_livraison`, `id_commande`) VALUES ('l_statut','l_date_exp','l_numero_suivi','l_date_livraison','l_id_commande')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertProduit` (IN `p_name` VARCHAR(250) CHARSET utf8, IN `p_prix` INT(6) UNSIGNED, IN `p_detail` VARCHAR(250) CHARSET utf8, IN `p_photo` VARCHAR(250) CHARSET utf8, IN `p_note` FLOAT(3) UNSIGNED, IN `p_stock` INT(8) UNSIGNED, IN `p_id_vendeur` INT(3) UNSIGNED)  INSERT INTO `produit`( `nom_produit`, `prix`, `description`, `photo`, `note`,  `stock`, `id_vendeur`) VALUES ('p_name','p_prix','p_detail','p_photo','p_note','p_stock','p_id_vendeur')$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `insertVendeur` (IN `v_client_id` INT(11), IN `v_note` FLOAT(4), IN `v_boutique` VARCHAR(255), IN `v_desc` VARCHAR(255))  INSERT INTO vendeur(`id_client`, `note_vendeur`, `nom_boutique`, `description`) VALUES (v_client_id,v_note, v_boutique, v_desc)$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `notificationLivraison` (IN `id_livr` INT(3) UNSIGNED)  SELECT * FROM `livraison` WHERE id= 'id_livr'$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `nouveauPaiement` (IN `p_id_com` INT(3) UNSIGNED, IN `p_method` VARCHAR(100) CHARSET utf8, IN `p_statut` VARCHAR(15) CHARSET utf8)  INSERT INTO `paiement`( `id_commande`, `moyen`, `etat_paiement`) VALUES ('p_id_com','p_method','p_statut')$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `nouveauRemboursement` (IN `v_id_commande` INT(4), IN `v_id_produit` INT(4), IN `v_quantite` INT(2), IN `v_type_remboursement` VARCHAR(255))  INSERT INTO `remboursement`(`id_commande`, `id_produit`, `quantite`, `type_remboursement`) 
VALUES (`v_id_commande`, `v_id_produit`, `v_quantite`, `v_type_remboursement`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateAddresse` (IN `v_num` INT(3), IN `v_voie` VARCHAR(255), IN `v_code_postal` VARCHAR(255), IN `v_ville` VARCHAR(255), IN `v_note` VARCHAR(255), IN `id` INT(11))  UPDATE adresse SET
adresse.numero_voie =IF(v_num != 0, v_num, adresse.numero_voie),
adresse.voie = IF(v_voie != '', v_voie, adresse.voie),
adresse.code_postal = IF(v_code_postal!= '', v_code_postal, adresse.code_postal),
adresse.ville = IF(v_ville!= '', v_ville, adresse.ville),
adresse.note = IF(v_note!= '', v_note, adresse.note)
where adresse.id = id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `updateAvis` (IN `v_id` INT(4), IN `v_id_vendeur` INT(4), IN `v_id_client` INT(4), IN `v_texte` VARCHAR(255), IN `v_note_vendeur` FLOAT(2))  UPDATE `avis` SET 
`id_vendeur`='v_id_vendeur',
`id_client`='v_id_client',
`texte`='v_texte',
`note_vendeur`='v_note_vendeur' 
WHERE `avis`.id= v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateClient` (IN `v_nom` VARCHAR(255), IN `v_prenom` VARCHAR(255), IN `v_mail` VARCHAR(255), IN `v_tel` VARCHAR(10), IN `v_password` VARCHAR(255), IN `id` INT(11))  update client SET
client.nom = IF(v_nom != '', v_nom, client.nom),
client.prenom = IF(v_prenom != '', v_prenom, client.prenom),
client.mail = IF(v_mail != '', v_mail,client.mail),
client.tel = IF(v_tel != '',v_tel, client.tel),
client.password = (v_password!= '',v_password, client.password)
WHERE client.id = id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `updateCodePromo` (IN `v_id` INT(2), IN `v_code` VARCHAR(255), IN `v_pourcentageReduction` INT(2))  UPDATE codepromo SET
codepromo.code =IF(v_code != '', v_code, codePromo.code),
codepromo.pourcentageReduction = IF(v_pourcentageReduction != 0, v_pourcentageReduction, codePromo.pourcentageReduction)
where codepromo.id = v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateCommande` (IN `v_id` INT(4), IN `v_id_client` INT(4), IN `v_montant` FLOAT(3), IN `v_id_codePromo` INT(4), IN `v_statut` VARCHAR(255))  UPDATE commande SET
commande.id_client = IF(v_id_client != 0, v_id_client, commande.id_client),
commande.statut = IF(v_statut != '', v_statut, commande.statut),
commande.montant =  IF(v_montant != 0, v_montant, commande.montant),
commande.id_codePromo = IF(v_id_codePromo != 0,  v_id_codePromo, commande.id_codePromo)
where commande.id = v_id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `updateLigneCommande` (IN `v_id` INT(4), IN `v_id_produit` INT(4), IN `v_nombre` INT(2), IN `v_id_commande` INT(4))  UPDATE `ligne_commande` SET 
`ligne_commande`.`id_produit`='v_id_produit',
`ligne_commande`.`nombre`='v_nombre',
`ligne_commande`.`id_commande`='v_id_commande' 
WHERE `ligne_commande`.id= v_id$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `updateLivraison` (IN `l_statut` VARCHAR(250) CHARSET utf8, IN `l_date_exp` DATE, IN `l_numero_suivi` INT(15) UNSIGNED, IN `l_date_livraison` DATE, IN `l_id_commande` INT(3) UNSIGNED, IN `id_livr` INT(3) UNSIGNED)  UPDATE `livraison` SET `statut`='l_statut',`date_expe`='l_date_exp',`numero_suivi`='l_numero_suivi',`date_livraison`='l_date_livraison',`id_commande`='l_id_commande' WHERE id='id_livr'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProduit` (IN `p_name` VARCHAR(250) CHARSET utf8, IN `p_prix` INT(6) UNSIGNED, IN `p_detail` VARCHAR(250) CHARSET utf8, IN `p_photo` VARCHAR(250) CHARSET utf8, IN `p_note` INT(3) UNSIGNED, IN `p_stock` INT(3) UNSIGNED, IN `p_id_vend` INT(3) UNSIGNED)  UPDATE `produit` SET `nom_produit`='p_name',`prix`='p_prix',`description`='p_detail',`photo`='p_photo',`note`='p_note',`id_vendeur`='p_id_vend',`stock`='p_stock' WHERE id = 'p_id'$$

CREATE DEFINER=`testcleontcosmo`@`%` PROCEDURE `updateVendeur` (IN `v_note` VARCHAR(255), IN `v_boutique` VARCHAR(255), IN `v_desc` VARCHAR(255), IN `id` INT(11))  UPDATE vendeur SET 
vendeur.note_vendeur=IF(v_note != '', v_note, vendeur.note_vendeur),
vendeur.nom_boutique=IF(v_boutique!= '', v_boutique, vendeur.nom_boutique),
vendeur.description=IF(v_desc != '', v_desc, vendeur.description) 
WHERE  vendeur.id= id$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `adresse`
--

CREATE TABLE `adresse` (
  `id` int(3) NOT NULL,
  `numero_voie` int(4) NOT NULL,
  `voie` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `note` varchar(255) NOT NULL,
  `id_client` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `adresse`
--

INSERT INTO `adresse` (`id`, `numero_voie`, `voie`, `ville`, `code_postal`, `note`, `id_client`) VALUES
(1, 9, 'allée de l\'adresse', 'ville ', '15150', 'En bas à droite', 1),
(3, 15, 'rue maurice', 'Asnières', '92602', 'A droite', 3),
(5, 12, 'rue maurice', 'Asnières', '92602', '', 4);

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `id` int(11) NOT NULL,
  `id_vendeur` int(3) NOT NULL,
  `id_client` int(3) NOT NULL,
  `texte` varchar(1000) NOT NULL,
  `note_vendeur` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `nom`, `prenom`, `mail`, `tel`, `password`) VALUES
(1, 'jean', 'michel', 'jean@michel.com', '0102030405', 'password'),
(3, 'Dupont', 'Charle', 'Dupontcharle@gmail.com', '07060103', 'kevin'),
(4, 'JEAN', 'Raimond', 'jeanraimond@yahoo.fr', '01020405', 'Hacher'),
(5, 'michel', 'kankan', 'michel@kankan.fr', '00666000', 'password'),
(8, 'michel', 'kankan', 'michel@kankan.fr', '606060606', 'password'),
(9, 'michel', 'kankan', 'michel@kankan.fr', '606060606', 'password');

-- --------------------------------------------------------

--
-- Structure de la table `codepromo`
--

CREATE TABLE `codepromo` (
  `id` int(4) NOT NULL,
  `code` varchar(255) NOT NULL,
  `pourcentageReduction` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `codepromo`
--

INSERT INTO `codepromo` (`id`, `code`, `pourcentageReduction`) VALUES
(1, '0', 2),
(2, '0', 2),
(3, '0', 2);

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(11) NOT NULL,
  `id_client` int(4) NOT NULL,
  `statut` varchar(255) NOT NULL,
  `montant` float NOT NULL,
  `id_codePromo` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `id_client`, `statut`, `montant`, `id_codePromo`) VALUES
(2, 1, 'en_commande', 730, 3),
(16, 1, 'attente', 113, 1),
(21, 1, 'att', 12, 2);

-- --------------------------------------------------------

--
-- Structure de la table `ligne_commande`
--

CREATE TABLE `ligne_commande` (
  `id` int(11) NOT NULL,
  `id_produit` int(4) NOT NULL,
  `nombre` int(2) NOT NULL,
  `id_commande` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ligne_commande`
--

INSERT INTO `ligne_commande` (`id`, `id_produit`, `nombre`, `id_commande`) VALUES
(1, 2, 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

CREATE TABLE `livraison` (
  `id` int(11) NOT NULL,
  `statut` varchar(255) NOT NULL,
  `date_expe` date NOT NULL,
  `numero_suivi` varchar(255) NOT NULL,
  `date_livraison` date NOT NULL,
  `id_commande` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE `paiement` (
  `id` int(11) NOT NULL,
  `id_commande` int(4) NOT NULL,
  `moyen` varchar(255) NOT NULL,
  `etat_paiement` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `paiement`
--

INSERT INTO `paiement` (`id`, `id_commande`, `moyen`, `etat_paiement`) VALUES
(1, 2, 'carte', 'pas_commencé');

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `nom_produit` varchar(255) NOT NULL,
  `prix` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `note` int(2) NOT NULL,
  `id_vendeur` int(4) NOT NULL,
  `stock` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `produit`
--

INSERT INTO `produit` (`id`, `nom_produit`, `prix`, `description`, `photo`, `note`, `id_vendeur`, `stock`) VALUES
(1, 'nom_produit', 12, 'lorem', 'url', 0, 1, 0),
(2, 'Iphone 12', 730, 'Description Du Produit', 'url', 7, 3, 96);

-- --------------------------------------------------------

--
-- Structure de la table `remboursement`
--

CREATE TABLE `remboursement` (
  `id` int(11) NOT NULL,
  `id_commande` int(4) NOT NULL,
  `id_produit` int(4) NOT NULL,
  `quantite` int(2) NOT NULL,
  `type_remboursement` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `remboursement`
--

INSERT INTO `remboursement` (`id`, `id_commande`, `id_produit`, `quantite`, `type_remboursement`) VALUES
(1, 2, 2, 1, 'avoir');

-- --------------------------------------------------------

--
-- Structure de la table `vendeur`
--

CREATE TABLE `vendeur` (
  `id` int(255) NOT NULL,
  `id_client` int(11) NOT NULL,
  `note_vendeur` int(2) NOT NULL,
  `nom_boutique` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vendeur`
--

INSERT INTO `vendeur` (`id`, `id_client`, `note_vendeur`, `nom_boutique`, `description`) VALUES
(1, 3, 0, 'Dupont shop', 'Lorem ipsum'),
(3, 4, 0, 'Chez Jean', 'Description boutique');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_client_add` (`id_client`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_client` (`id_client`),
  ADD KEY `fk_vendeur` (`id_vendeur`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `codepromo`
--
ALTER TABLE `codepromo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_client_commande` (`id_client`),
  ADD KEY `fk_code_p` (`id_codePromo`);

--
-- Index pour la table `ligne_commande`
--
ALTER TABLE `ligne_commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_produit_commande` (`id_produit`),
  ADD KEY `fk_commande` (`id_commande`);

--
-- Index pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_commande_livraison` (`id_commande`);

--
-- Index pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_commande_paiement` (`id_commande`);

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_produit_vendeur` (`id_vendeur`);

--
-- Index pour la table `remboursement`
--
ALTER TABLE `remboursement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_remb_produit` (`id_produit`),
  ADD KEY `fk_remb_commande` (`id_commande`);

--
-- Index pour la table `vendeur`
--
ALTER TABLE `vendeur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_vendeur_client` (`id_client`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `adresse`
--
ALTER TABLE `adresse`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `codepromo`
--
ALTER TABLE `codepromo`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `ligne_commande`
--
ALTER TABLE `ligne_commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `livraison`
--
ALTER TABLE `livraison`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `remboursement`
--
ALTER TABLE `remboursement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `vendeur`
--
ALTER TABLE `vendeur`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `adresse`
--
ALTER TABLE `adresse`
  ADD CONSTRAINT `fk_client_add` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `fk_client` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `vendeur` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `fk_client_commande` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `ligne_commande`
--
ALTER TABLE `ligne_commande`
  ADD CONSTRAINT `fk_commande` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_produit_commande` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `fk_commande_livraison` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`) ON UPDATE NO ACTION;

--
-- Contraintes pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `fk_commande_paiement` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`) ON UPDATE NO ACTION;

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `fk_produit_vendeur` FOREIGN KEY (`id_vendeur`) REFERENCES `vendeur` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `remboursement`
--
ALTER TABLE `remboursement`
  ADD CONSTRAINT `fk_remb_commande` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_remb_produit` FOREIGN KEY (`id_produit`) REFERENCES `produit` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `vendeur`
--
ALTER TABLE `vendeur`
  ADD CONSTRAINT `fk_vendeur_client` FOREIGN KEY (`id_client`) REFERENCES `client` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
