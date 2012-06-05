#!/bin/bash

# Utility script to start Titanium Mobile project from the command line.
# More info at http://github.com/guilhermechapiewski/titanium-jasmine

PROJECT_NAME=${PROJECT_NAME}
PROJECT_ROOT=${PROJECT_ROOT:-../}
APP_DEVICE=${DEVICE_TYPE}

TI_SDK_VERSION="2.0.1.GA2"
TI_DIR="~/Library/Application\ Support/Titanium"
TI_ASSETS_DIR="${TI_DIR}/mobilesdk/osx/${TI_SDK_VERSION}"

# iOS Settings
IPHONE_SDK_VERSION="5.0"
TI_IPHONE_DIR="${TI_ASSETS_DIR}/iphone"
TI_IPHONE_BUILD="${TI_IPHONE_DIR}/builder.py"


# Android Settings
ANDROID_SDK_VERSION="2.2.3"
TI_ANDROID_DIR="${TI_ASSETS_DIR}/android"
TI_ANDROID_BUILD="${TI_ANDROID_DIR}/builder.py"



if [ "PROJECT_NAME" == "" ]; then
	echo "[ERROR] Please inform PROJECT_NAME."
	exit 1
fi



case  ${DEVICE_TYPE} in

	iphone)  bash -c "${TI_IPHONE_BUILD} run ${PROJECT_ROOT}/${PROJECT_NAME}/ ${IPHONE_SDK_VERSION} ${APP_ID} ${APP_NAME} ${APP_DEVICE}" \
		| perl -pe 's/^\[DEBUG\].*$/\e[35m$&\e[0m/g;s/^\[INFO\].*$/\e[36m$&\e[0m/g;s/^\[WARN\].*$/\e[33m$&\e[0m/g;s/^\[ERROR\].*$/\e[31m$&\e[0m/g;'

	killall "iPhone Simulator" #this is remarkably hacky
	    ;;
	ipad)		 bash -c "${TI_IPHONE_BUILD} run ${PROJECT_ROOT}/${PROJECT_NAME}/ ${IPHONE_SDK_VERSION} ${APP_ID} ${APP_NAME} ${APP_DEVICE}" \
				| perl -pe 's/^\[DEBUG\].*$/\e[35m$&\e[0m/g;s/^\[INFO\].*$/\e[36m$&\e[0m/g;s/^\[WARN\].*$/\e[33m$&\e[0m/g;s/^\[ERROR\].*$/\e[31m$&\e[0m/g;'

			killall "iPhone Simulator" #this is remarkably hacky
			    ;;
	"android") 	bash -c "${TI_ANDROID_BUILD} run ${PROJECT_ROOT}/${PROJECT_NAME}/ ${ANDROID_SDK_VERSION} ${APP_ID} ${APP_NAME} ${APP_DEVICE}" \
						| perl -pe 's/^\[DEBUG\].*$/\e[35m$&\e[0m/g;s/^\[INFO\].*$/\e[36m$&\e[0m/g;s/^\[WARN\].*$/\e[33m$&\e[0m/g;s/^\[ERROR\].*$/\e[31m$&\e[0m/g;'
		killall "Android" #this is remarkably hacky
	;;
	"android-hardware") echo "Building to android device... in the future"
		exit 1
	   ;;
	*) echo "[ERROR] Please inform DEVICE_TYPE ('ipad', 'iphone', or 'android'). Blackberry not supported in this build script."
		 exit 1
	   ;;
esac


 

# Get APP parameters from current tiapp.xml
APP_ID=`cat ${PROJECT_NAME}/tiapp.xml | grep "<id>" | sed -e "s/<\/*id>//g"`
APP_NAME=`cat ${PROJECT_NAME}/tiapp.xml | grep "<name>" | sed -e "s/<\/*name>//g"`

if [ "APP_ID" == "" ] || [ "APP_NAME" == "" ]; then
	echo "[ERROR] Could not obtain APP parameters from tiapp.xml file (does the file exist?)."
	exit 1
fi

# This all needs to be refactored.

#iOS

#if [ "DEVICE_TYPE" == "iphone" ]; then
#bash -c "${TI_IPHONE_BUILD} run ${PROJECT_ROOT}/${PROJECT_NAME}/ ${IPHONE_SDK_VERSION} ${APP_ID} ${APP_NAME} ${APP_DEVICE}" \
#	| perl -pe 's/^\[DEBUG\].*$/\e[35m$&\e[0m/g;s/^\[INFO\].*$/\e[36m$&\e[0m/g;s/^\[WARN\].*$/\e[33m$&\e[0m/g;s/^\[ERROR\].*$/\e[31m$&\e[0m/g;'
#
#killall "iPhone Simulator" #this is remarkably hacky
##fi

# Android
#bash -c "${TI_BUILD} run ${PROJECT_ROOT}/${PROJECT_NAME}/ ${IPHONE_SDK_VERSION} ${APP_ID} ${APP_NAME} ${APP_DEVICE}" \
#	| perl -pe 's/^\[DEBUG\].*$/\e[35m$&\e[0m/g;s/^\[INFO\].*$/\e[36m$&\e[0m/g;s/^\[WARN\].*$/\e[33m$&\e[0m/g;s/^\[ERROR\].*$/\e[31m$&\e[0m/g;'

#if(some_android_condition); then

#fi