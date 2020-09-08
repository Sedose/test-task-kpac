CREATE DATABASE kpac;
use kpac;

CREATE TABLE `kpacs`
(
    `id`            int(10) UNSIGNED NOT NULL,
    `title`         varchar(512)     NOT NULL,
    `description`   varchar(1024)    NOT NULL,
    `creation_date` date             NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE `kpacs_kpac_sets`
(
    `kpac_id`     int(10) UNSIGNED NOT NULL,
    `kpac_set_id` int(10) UNSIGNED NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE `kpac_sets`
(
    `id`    int(11) UNSIGNED NOT NULL,
    `title` varchar(512)     NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

ALTER TABLE `kpacs`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `kpacs_kpac_sets`
    ADD UNIQUE KEY `kpac_id` (`kpac_id`, `kpac_set_id`),
    ADD KEY `kpac_set_id` (`kpac_set_id`);

ALTER TABLE `kpac_sets`
    ADD PRIMARY KEY (`id`);

ALTER TABLE `kpacs`
    MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE `kpac_sets`
    MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;

ALTER TABLE `kpacs_kpac_sets`
    ADD CONSTRAINT `kpacs_kpac_sets_ibfk_1` FOREIGN KEY (`kpac_id`) REFERENCES `kpacs` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
    ADD CONSTRAINT `kpacs_kpac_sets_ibfk_2` FOREIGN KEY (`kpac_set_id`) REFERENCES `kpac_sets` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
