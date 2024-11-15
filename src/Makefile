bump-version:
	@echo "Incrementing version number"
	@jq '.version |= (split(".") | .[2] |= (tonumber + 1 | tostring) | join("."))' vss-extension.json > tmp.json && mv tmp.json vss-extension.json

create-ado-extension: bump-version
	@echo "Creating ADO extension"
	@npx tfx-cli extension create --manifests vss-extension.json --output-path wm-get-folder-content.vsix

publish-ado-extension: create-ado-extension
	@echo "Publishing ADO extension"
	@npx tfx-cli extension publish --vsix wm-get-folder-content.vsix --token 4Hx7ybCeP01VFYeB7ShR56CzoCQQfKEGlOcr7YKFHuzlyOldnaiZJQQJ99AKACAAAAAAAAAAAAAGAZDOSeBX