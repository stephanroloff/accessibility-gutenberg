npm run build
# Live
rsync -avz --exclude=".git" --exclude="node_modules" --delete ./ wordpress@193.197.73.79:/var/www/html/wordpress/wp-content/plugins/accessibility-gutenberg/ --progress

