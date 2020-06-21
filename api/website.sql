create database `website`;

create table `website`.`posts` (
    `id` BIGINT(255) NOT NULL,
    `title` TEXT,
    `author` TEXT,
    `image` TEXT,
    `publishdate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `excert` TEXT, PRIMARY KEY (`id`));
	
create table `website`.`users` (
	`id` BIGINT(255) NOT NULL,
	`firstname` TEXT,
	`lastname` TEXT,
	`email` TEXT,
	`password` TEXT,
	`bio` TEXT,
	`role` TEXT,
	`image` TEXT, PRIMARY KEY (`id`));
	
create table `website`.`features` (
    `id` BIGINT(255) NOT NULL,
    icon TEXT,
    `title` TEXT,
    `description` TEXT, PRIMARY KEY (`id`));
	
create table `website`.`gallery` (
    `id` BIGINT(255) NOT NULL,
    `name` TEXT, PRIMARY KEY (`id`));
create table `website`.`menu` (
    `id` BIGINT(255) NOT NULL,
    `title` TEXT,
    `link` TEXT,
    `outlet` TEXT, PRIMARY KEY (`id`));
create table `website`.`companies` (
    `id` BIGINT(255) NOT NULL,
    `name` TEXT,
    `link` TEXT,
    `logo` TEXT, PRIMARY KEY (`id`));
create table `website`.`feedbacks` (
    `id` BIGINT(255) NOT NULL,
    `name` TEXT,
    `userimage` TEXT,
    `comments` TEXT,
    `company` TEXT, PRIMARY KEY (`id`));
create table `website`.`plans` (
    `id` BIGINT(255) NOT NULL,
    `title` TEXT,
    `subtitle` TEXT,
    `description` TEXT,
    `price` TEXT,
    `currency` TEXT,
    `downloads` TEXT,
    `extensions` TEXT,
    `tutorials` TEXT,
    `support` TEXT,
    `updates` TEXT,
    `buttontext` TEXT,
    `buttonlink` TEXT,
    `featured` boolean, PRIMARY KEY (`id`));
 create table `website`.`websites` (
    `id` BIGINT(255) NOT NULL,
    `link` TEXT,
    `title` TEXT,
    `target` TEXT,
    `username` TEXT,
    `icon` TEXT, PRIMARY KEY (`id`));
create table `website`.`pages` (
    `id` BIGINT(255) NOT NULL,
    `name` TEXT,
    `tagline` TEXT,
    `title` TEXT,
    `description` TEXT, PRIMARY KEY (`id`));

