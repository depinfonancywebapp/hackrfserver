#!/bin/bash
rm brdc*
# Declaration des Variables 
day=$(date +%j)
year=$(date +%Y)
yr=$(date +%y)
RINEX_NAV_FILE="brdc${day}0.${yr}n"

# Téléchargement & extraction du fichier 
wget -q ftps://gdc.cddis.eosdis.nasa.gov/pub/gps/data/daily/$year/brdc/$RINEX_NAV_FILE.gz -O brdc_file`date +%d_%m_%y`.gz
gunzip brdc_file`date +%d_%m_%y`.gz

echo -e " le fichier \033[32m"brdc_file`date +%d_%m_%y` "\033[00mest extrait"

scripts_gps/gps-sdr-sim -b 8 -e brdc_file`date +%d_%m_%y` -l $1,100