#!/usr/bin/env bash

set -e

BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
pushd "${BASEDIR}"

# Parameters
sourceApiUrl="${1:-http://nx-api.local/}"

# Global vars
urlSegmentPhp="proxy/php"
urlSegmentJsEndpoints="proxy/jsEndpoints"
urlSegmentJsProxy="proxy/jsProxy"


# Functions

updateLib() {
	segment="${1}"
	destFile="${2}"

	wget -O ${destFile} "${sourceApiUrl}${segment}"
}


# Main execution

updateLib "${urlSegmentPhp}" "NxApiProxy.php"
updateLib "${urlSegmentJsEndpoints}" "NxApiEndpoints.js"
updateLib "${urlSegmentJsProxy}" "NxApiProxy.js"

echo "Done"

popd