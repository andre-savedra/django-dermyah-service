#!/bin/bash
echo "ESPERANDO SCRIPT!!!"
sleep 10s
echo "RETOMANDO SCRIPT!!!"
cd /home/pi/dermyah_service
echo "DIRETORIO"
source venv/bin/activate
echo "VENV"
sleep 5s
echo "RUNSERVER"
python3 manage.py runserver dermyah.local:8000 --noreload
echo "INICIADO EBAAA"
exit 0
