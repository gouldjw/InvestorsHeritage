export PROJECT_ROOT=$(shell pwd)
export TMP_DIR=$(PROJECT_ROOT)/tmp/

run:
	@mkdir -p ${PROJECT_ROOT}/src/Resources/test/
	@mkdir -p ${PROJECT_ROOT}/src/build/iphone/
	@echo "" > ${PROJECT_ROOT}/src/Resources/test/enabled.js
	@make launch-titanium

test:
	@mkdir -p ${PROJECT_ROOT}/src/Resources/test/
	@mkdir -p ${PROJECT_ROOT}/src/build/iphone/
	@echo "ih.config.tests_enabled = true;" > ${PROJECT_ROOT}/src/Resources/test/enabled.js
	@make launch-titanium

clean: 
	@rm -rf ${PROJECT_ROOT}/src/build/iphone/*
	@mkdir -p ${PROJECT_ROOT}/src/build/iphone/
	@echo "Deleted: ${PROJECT_ROOT}/src/build/iphone/*"

# clean-languages:
# 	@PROJECT_ROOT=${PROJECT_ROOT} bash ${PROJECT_ROOT}/bin/i18n.sh clean
# 
# languages:
# 	@PROJECT_ROOT=${PROJECT_ROOT} bash ${PROJECT_ROOT}/bin/i18n.sh

launch-titanium:
	@echo "Building with Titanium..."
	@mkdir -p ${PROJECT_ROOT}/src/build/iphone/
	@PROJECT_ROOT=${PROJECT_ROOT} bash ${PROJECT_ROOT}/bin/titanium.sh

build-verification:
	@if [ "`find ${PROJECT_ROOT}/src/build/iphone/ -type f | wc -l | sed 's/ //g'`" == "0" ]; then\
		echo "[ERROR] Please execute \"make run\" and run the application on simulator before publishing, so the compiled files can be generated.";\
		exit 1;\
	fi


project-name-verification:
	@if [ "${PROJECT_NAME}" != "InvestorsRelations" ] && [ "${PROJECT_NAME}" != "InvestorsRelations" ]; then\
		echo "[ERROR] PROJECT_NAME env variable is required for this make target";\
		echo "Please use one of the following:";\
		echo "- \"PROJECT_NAME=InvestorsRelations ... make [target]\"";\
		echo "- \"PROJECT_NAME=InvestorsRelations... make [target]\"";\
		exit 1;\
	fi


log:
	@tail -n100 -f ${PROJECT_ROOT}/src/build/iphone/build/build.log
