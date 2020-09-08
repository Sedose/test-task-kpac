use kpac;
CREATE USER 'kpac_user'@'localhost' IDENTIFIED BY 'kpac_password';
GRANT ALL PRIVILEGES ON kpac.kpacs TO 'kpac_user'@'localhost';
GRANT ALL PRIVILEGES ON kpac.kpac_sets TO 'kpac_user'@'localhost';
GRANT ALL PRIVILEGES ON kpac.kpacs_kpac_sets TO 'kpac_user'@'localhost';

INSERT INTO `kpacs` (`id`, `title`, `description`, `creation_date`) VALUES
(35, 'first title', 'first description', '2020-09-01'),
(36, 'second title', 'second description', '2020-09-10'),
(37, 'third title', 'third description', '2020-09-21');

INSERT INTO `kpac_sets` (`id`, `title`) VALUES
(15, 'first set'),
(16, 'second set'),
(17, 'third set');

INSERT INTO `kpacs_kpac_sets` (`kpac_id`, `kpac_set_id`) VALUES
(35, 16),
(35, 17);
