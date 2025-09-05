# Use Nginx to serve the frontend
FROM nginx:alpine

# Copy prebuilt dist files from your repo to Nginx folder
COPY ./dist /usr/share/nginx/html

# Copy custom Nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


