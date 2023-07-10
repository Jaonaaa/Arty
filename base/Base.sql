create database regime;
use regime;

<---------TABLE UTILISATEUR-------------->
create table utilisateur (
    id_utilisateur varchar(30) primary key,
    nom varchar (50),
    email varchar(50),
    mot_de_passe varchar(50),
    date_de_naissance date,
    est_admin int
);


<-----------TABLE GENRE------------------->

create table genre(
    id_genre varchar(30) primary key,
    nom varchar(50)
);

<-----------TABLE DETAILS------------------->

create table detail_utilisateur (
    id_detail int primary key not null auto_increment,
    id_utilisateur varchar(30) references utilisateur(id_utilisateur),
    id_genre varchar(50),
    poids float,
    taille float,
    foreign key (id_genre) references genre(id_genre)
);

<-----------TABLE REGIME------------------->
create table regime(
    id_regime varchar(30) primary key,
    nom varchar(50),
    duree varchar(50)
);

<-----------TABLE TYPE_REPAS------------------->
create table type_repas(
    id_type_repas varchar(30) primary key,
    nom varchar(50)
);
<-----------TABLE REPAS------------------->
create table repas(
    id_repas varchar(30) primary key,
    id_type_repas varchar(30),
    nom varchar(50),
    photo varchar(50),
    calorie int,
    foreign key (id_type_repas) references type_repas(id_type_repas)
);

<-----------TABLE REGIME_REPAS------------------->
create table regime_repas (
    id_regime_repas varchar(30) primary key,
    id_regime varchar(50),
    id_repas varchar(30),
    n_jour int,
    foreign key (id_regime) references regime(id_regime),
    foreign key (id_repas) references repas(id_repas)
);

<-----------TABLE HISTORIQUE_UTILISATEUR------------------->
create table historique_utilisateur(
    id_historique_utilisateur varchar(30) primary key,
    id_utilisateur varchar(30),
    date_historique_utilisateur date,
    foreign key (id_utilisateur) references utilisateur(id_utilisateur)
);

<-----------TABLE CODE_RECHARGE------------------->
create table code_recharge(
    id_code_recharge varchar(30) primary key,
    code varchar(20),
    prix float,
    etat int
);

<-----------TABLE UTILISATEUR_REGIME------------------->
create table utilisateur_regime(
    id_utilisateur_regime varchar(30) primary key,
    id_regime varchar(30),
    debut date,
    foreign key (id_regime) references regime(id_regime)
);

<-----------TABLE SPORT------------------->
create table sport(
    id_sport varchar(30) primary key,
    nom varchar(50),
    poids_quotidien float
);