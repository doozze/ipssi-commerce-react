DELIMITER $$
--
-- Procédures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `affAvisVendeur` (IN `id` INT(11))  SELECT avis.id_client, avis.texte, avis.note_vendeur FROM avis WHERE avis.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `affiProd` (IN `p_id` INT(3) UNSIGNED)  SELECT * FROM `produit` WHERE id = 'p_id'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `affStockFaible` ()  SELECT `produit`.`id`, `produit`.`nom_produit`, `produit`.`prix`, `produit`.`description`, `produit`.`photo`, `produit`.`note`, `vendeur`.`nom_boutique`, `produit`.`stock` FROM `produit`, `vendeur` WHERE `stock` <= 1 AND `produit`.`id_vendeur`=`vendeur`.`id`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `aff_tous_les_produits` ()  SELECT * FROM `produit`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `callAllCommande` ()  SELECT * FROM commande$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `callSingleCommande` (IN `v_id` INT(4))  SELECT * FROM `commande` WHERE commande.id = v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `connexionClient` (IN `v_mail` VARCHAR(255), IN `v_password` VARCHAR(255), OUT `con` INT(3))  SELECT count(*) into con from client
where client.mail = v_mail AND client.password = v_password$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createCodePromo` (IN `v_code` VARCHAR(255), IN `v_pourcentageReduction` INT(2))  INSERT INTO codepromo(code, pourcentageReduction)
VALUES (v_code, v_pourcentageReduction)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `createCommande` (IN `v_id_client` INT(4), IN `v_statut` VARCHAR(255), IN `v_montant` FLOAT(3), IN `v_id_codePromo` INT(4))  INSERT INTO `commande`(`id_client`, `statut`, `montant`, `id_codePromo`) 
VALUES (v_id_client, v_statut, v_montant, v_id_codePromo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteAddresse` (IN `id` INT(11))  DELETE from adresse WHERE adresse.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteClient` (IN `id` INT(11))  delete from client WHERE client.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteCodePromo` (IN `v_id` INT(3))  DELETE FROM `codepromo` WHERE codepromo.id = v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteCommande` (IN `v_id` INT(4))  DELETE FROM `commande` WHERE `commande`.`id`= v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduit` (IN `p_id` INT(3) UNSIGNED)  DELETE FROM `produit` WHERE id = 'p_id'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteVendeur` (IN `id` INT(11))  DELETE FROM vendeur where vendeur.id=id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getAddresse` (IN `id` INT(11))  select * from adresse where adresse.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getClient` (IN `id` INT(11))  select * from client where client.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getCommande` (IN `id` INT(11))  SELECT * from commande WHERE commande.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getMailVendeur` (IN `v_id_v` INT(11))  SELECT client.mail FROM vendeur, client
where client.id = vendeur.id_client and vendeur.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getProduit` (IN `id` INT(11))  SELECT * from produit WHERE produit.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertAddresse` (IN `v_numero` INT(3), IN `v_nom` VARCHAR(255), IN `v_ville` VARCHAR(255), IN `v_code_postal` VARCHAR(255), IN `v_note` VARCHAR(255))  INSERT INTO adresse(numero_voie, voie, ville, code_postal, note)
VALUES (v_numero, v_nom, v_ville, v_code_postal, v_note)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertAvis` (IN `v_text` VARCHAR(1000), IN `id_v` INT(11), IN `id_c` INT(11), IN `v_note` INT(2))  INSERT INTO avis (`id_vendeur`, `id_client`, `texte`, `note_vendeur`) VALUES (id_v, id-c, v_text, v_note)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertClient` (IN `v_nom` VARCHAR(255), IN `v_prenom` VARCHAR(255), IN `v_mail` VARCHAR(255), IN `v_adresse_id` INT(11), IN `v_tel` VARCHAR(10), IN `v_password` VARCHAR(255))  INSERT INTO `client`( `nom`, `prenom`, `mail`, `id_adresse`, `tel`, `password`) VALUES (v_nom, v_prenom, v_mail, v_adresse_id ,v_tel,v_password)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertCommande` (IN `client_id` INT(11), IN `v_status` VARCHAR(255), IN `codePromo_id` INT(11))  INSERT INTO commande(id_client, statut, id_codePromo) VALUES (client_id, v_status, codePromo_id)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertLigneCommande` (IN `v_id_produit` INT(4), IN `v_nb` INT(2), IN `v_id_commande` INT(4))  INSERT INTO `ligne_commande`(`id_produit`, `nombre`, `id_commande`) 
VALUES (`v_id_produit`, `v_nombre`, `v_id_commande`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertLivraison` (IN `l_statut` VARCHAR(250) CHARSET utf8, IN `l_date_exp` DATE, IN `l_numero_suivi` INT(15) UNSIGNED, IN `l_date_livraison` DATE, IN `l_id_commande` INT(3) UNSIGNED)  INSERT INTO `livraison`(`statut`, `date_expe`, `numero_suivi`, `date_livraison`, `id_commande`) VALUES ('l_statut','l_date_exp','l_numero_suivi','l_date_livraison','l_id_commande')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertProduit` (IN `p_name` VARCHAR(250) CHARSET utf8, IN `p_prix` INT(6) UNSIGNED, IN `p_detail` VARCHAR(250) CHARSET utf8, IN `p_photo` VARCHAR(250) CHARSET utf8, IN `p_note` FLOAT(3) UNSIGNED, IN `p_stock` INT(8) UNSIGNED, IN `p_id_vendeur` INT(3) UNSIGNED)  INSERT INTO `produit`( `nom_produit`, `prix`, `description`, `photo`, `note`,  `stock`, `id_vendeur`) VALUES ('p_name','p_prix','p_detail','p_photo','p_note','p_stock','p_id_vendeur')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertVendeur` (IN `v_client_id` INT(11), IN `v_note` FLOAT(4), IN `v_boutique` VARCHAR(255), IN `v_desc` VARCHAR(255))  INSERT INTO vendeur(`id_client`, `note_vendeur`, `nom_boutique`, `description`) VALUES (v_client_id,v_note, v_boutique, v_desc)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `notificationLivraison` (IN `id_livr` INT(3) UNSIGNED)  SELECT * FROM `livraison` WHERE id= 'id_livr'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `nouveauPaiement` (IN `p_id_com` INT(3) UNSIGNED, IN `p_method` VARCHAR(100) CHARSET utf8, IN `p_statut` VARCHAR(15) CHARSET utf8)  INSERT INTO `paiement`( `id_commande`, `moyen`, `etat_paiement`) VALUES ('p_id_com','p_method','p_statut')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `nouveauRemboursement` (IN `v_id_commande` INT(4), IN `v_id_produit` INT(4), IN `v_quantite` INT(2), IN `v_type_remboursement` VARCHAR(255))  INSERT INTO `remboursement`(`id_commande`, `id_produit`, `quantite`, `type_remboursement`) 
VALUES (`v_id_commande`, `v_id_produit`, `v_quantite`, `v_type_remboursement`)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateAddresse` (IN `v_num` INT(3), IN `v_voie` VARCHAR(255), IN `v_code_postal` VARCHAR(255), IN `v_ville` VARCHAR(255), IN `v_note` VARCHAR(255), IN `id` INT(11))  UPDATE adresse SET
adresse.numero_voie =IF(v_num != 0, v_num, adresse.numero_voie),
adresse.voie = IF(v_voie != '', v_voie, adresse.voie),
adresse.code_postal = IF(v_code_postal!= '', v_code_postal, adresse.code_postal),
adresse.ville = IF(v_ville!= '', v_ville, adresse.ville),
adresse.note = IF(v_note!= '', v_note, adresse.note)
where adresse.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateAvis` (IN `v_id` INT(4), IN `v_id_vendeur` INT(4), IN `v_id_client` INT(4), IN `v_texte` VARCHAR(255), IN `v_note_vendeur` FLOAT(2))  UPDATE `avis` SET 
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

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateCodePromo` (IN `v_id` INT(2), IN `v_code` VARCHAR(255), IN `v_pourcentageReduction` INT(2))  UPDATE codepromo SET
codepromo.code =IF(v_code != '', v_code, codePromo.code),
codepromo.pourcentageReduction = IF(v_pourcentageReduction != 0, v_pourcentageReduction, codePromo.pourcentageReduction)
where codepromo.id = v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateCommande` (IN `v_id` INT(4), IN `v_id_client` INT(4), IN `v_montant` FLOAT(3), IN `v_id_codePromo` INT(4), IN `v_statut` VARCHAR(255))  UPDATE commande SET
commande.id_client = IF(v_id_client != 0, v_id_client, commande.id_client),
commande.statut = IF(v_statut != '', v_statut, commande.statut),
commande.montant =  IF(v_montant != 0, v_montant, commande.montant),
commande.id_codePromo = IF(v_id_codePromo != 0,  v_id_codePromo, commande.id_codePromo)
where commande.id = v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateLigneCommande` (IN `v_id` INT(4), IN `v_id_produit` INT(4), IN `v_nombre` INT(2), IN `v_id_commande` INT(4))  UPDATE `ligne_commande` SET 
`ligne_commande`.`id_produit`='v_id_produit',
`ligne_commande`.`nombre`='v_nombre',
`ligne_commande`.`id_commande`='v_id_commande' 
WHERE `ligne_commande`.id= v_id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateLivraison` (IN `l_statut` VARCHAR(250) CHARSET utf8, IN `l_date_exp` DATE, IN `l_numero_suivi` INT(15) UNSIGNED, IN `l_date_livraison` DATE, IN `l_id_commande` INT(3) UNSIGNED, IN `id_livr` INT(3) UNSIGNED)  UPDATE `livraison` SET `statut`='l_statut',`date_expe`='l_date_exp',`numero_suivi`='l_numero_suivi',`date_livraison`='l_date_livraison',`id_commande`='l_id_commande' WHERE id='id_livr'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProduit` (IN `p_name` VARCHAR(250) CHARSET utf8, IN `p_prix` INT(6) UNSIGNED, IN `p_detail` VARCHAR(250) CHARSET utf8, IN `p_photo` VARCHAR(250) CHARSET utf8, IN `p_note` INT(3) UNSIGNED, IN `p_stock` INT(3) UNSIGNED, IN `p_id_vend` INT(3) UNSIGNED)  UPDATE `produit` SET `nom_produit`='p_name',`prix`='p_prix',`description`='p_detail',`photo`='p_photo',`note`='p_note',`id_vendeur`='p_id_vend',`stock`='p_stock' WHERE id = 'p_id'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateVendeur` (IN `v_note` VARCHAR(255), IN `v_boutique` VARCHAR(255), IN `v_desc` VARCHAR(255), IN `id` INT(11))  UPDATE vendeur SET 
vendeur.note_vendeur=IF(v_note != '', v_note, vendeur.note_vendeur),
vendeur.nom_boutique=IF(v_boutique!= '', v_boutique, vendeur.nom_boutique),
vendeur.description=IF(v_desc != '', v_desc, vendeur.description) 
WHERE  vendeur.id= id$$

DELIMITER ;

-- --------------------------------------------------------
