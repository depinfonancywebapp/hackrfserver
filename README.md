# hackrfserver
Scripts nécéssaires au bon fonctionnement du spoofing gps et des attaques replay
## Prérequis
il faut installer au préalable gnuradio

## Instalation sous linux :
```bash
sudo add-apt-repository ppa:gnuradio/gnuradio-releases-3.9
sudo apt-get update
sudo apt-get install gnuradio python3-packaging
```

## Lancer le serveur
sur le pc ou on veut utiliser le hackrf, lancer le serveur `node index.js` 
Rejoindre la page http://192.168.1.22:3001
