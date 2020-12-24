[![Kiddo](https://i.postimg.cc/wTKffWZb/kiddo.png)](https://kiddoi.web.app/)
[![TheBlackPearl](https://circleci.com/gh/TheBlackPearl-FinaleProject/Kiddo.svg?style=shield)](https://github.com/TheBlackPearl-FinaleProject/Kiddo)
[![GitHub forks](https://img.shields.io/github/forks/TheBlackPearl-FinaleProject/Kiddo?style=plastic)](https://github.com/TheBlackPearl-FinaleProject/Kiddo/network)
![GitHub last commit](https://img.shields.io/github/last-commit/TheBlackPearl-FinaleProject/Kiddo)
[![TheBlackPearl](https://circleci.com/gh/TheBlackPearl-FinaleProject/Kiddo.svg?style=svg)](https://github.com/TheBlackPearl-FinaleProject/Kiddo)

# Project Name : KIDDO

## Team

  - Dima Jaber
  - Hamdallah Fatayer 
  - Noor Aldeen Ashqar
  - Razan Abusamra
  
## Table of Contents

1. [About](#about)
1. [Technologies Used](#technologies-used)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies FrontEnd](#installing-dependencies-frontend)
    1. [Installing Dependencies BackEnd](#installing-dependencies-backend)
    1. [Deploying](#deploying)
1. [Links](#links)
1. [Picture Documentation](#picture-documentation)

## About

- Safe Online Environment For the Kids (Android Mobile App)

## Technologies Used

- DataBase (Local Host: Sqlite3 - Deployed Version: MySql)
- Backend (Python Django)
- Frontend (React Native)
   - React (Redux - React Native Navigation - Hooks)
   - User Interface Framework (React Native Paper)
   - Design (React Native Animation - React Native Alerts)
- Payment System (Stripe)
- Testing (Jest & Enzyme)
- Authentication (JWT - Django Rest Framework Permissions)
- Continuous Integration (CircleCI)
- Deployment/Cloud Solutions (FrontEnd:Firebase - BackEnd:Google Cloud(NginX))

## Requirements

- TextEditor 
- Android studio
- React Native > v0.6
- expo > v39.0
- expo-cli > v4.0
- Python 3.9 
- django 1.0.0

## Development

1. Fork the repo from github.
2. Clone down your fork
```
git clone https://github.com/<Your Github userName>/Kiddo
```
3. Move into the repo after its been cloned onto your local machine.
4. Follow the instructions in the 'Installing Dependencies' section.

### Installing Dependencies FrontEnd

1. Open terminal 1: From root directory to forntend directory:

```
cd frontend/
npm install
expo start
```
2. To run the App
  - (Option1) Press Android device/emulator to run the app in Android studio.
  - (Option2) Scan the code and run it on your phone using Expo Phone Application.
3. To run Jest test
```
npm test
``` 
4. To build the App 
  - (Android)
```
npm run android
``` 
  - (ios) - prefered on mac
```
pod install
npm run ios
```
### Installing Dependencies BackEnd

1. Open terminal 2: From root directory to backend directory:

```
cd backend/
python -m venv venv
```
2. To enter venv (Virtual Environment)
```
. venv/Scripts/activate
```
3. To install dependencies (after entering venv)
```
pip install -r requirements.txt
```
4. To run server localy (You should install the dependencies first)
```
python manage.py runserver
```
5. To run MySql database on localhost (You can skip this and use sqlite3 default database)
- Uncomment the database code in /backend/settings.py 
- Install gcloud 
- inside /backend terminal do the following
```
$ ./cloud_sql_proxy 
-instances=blackpearl2:us-central1:blackpearl=tcp:3306
```
6. To update dependencies file
- Enter venv or cd /backend 
```
pip freeze > requirements.txt
```
7. To update the database tables for localhost
```
python manage.py makemigrations api
python manage.py migrate
```
### Deploying

To deploy the website using firebase
1. Install firebase
```
cd frontend/
firebase init
```
2. To deploy
```
cd frontend/
firebase deploy
```

To deploy the server using app engine
1. Install gcloud & delete pipfile + pipfilelock
```
cd backend/
gcloud app deploy
```
2. To update the deployed server
Run MySql database on localhost.
```
cd backend/
python manage.py makemigrations api
python manage.py migrate
gcloud app deploy
```
## Links

- Deployed: Front End
https://kiddoi.web.app/
- Deployed: Backend Server
https://blackpearl2.ew.r.appspot.com/
- Deployed: Backend Admin Server
https://blackpearl2.ew.r.appspot.com/admin 

## Picture Documentation

![Home Page](https://i.imgur.com/JQjqTSk.png)
![Home Page](https://i.imgur.com/bnqYsZ1.png)
![Home Page](https://i.imgur.com/ZqTqrt6.png)
![Home Page](https://i.imgur.com/fYf09ob.png)
