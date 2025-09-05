# Use Nginx to serve static files
FROM nginx:stable-alpine

# Copy the built frontend (dist folder) into Nginx
COPY dist /usr/share/nginx/html

# Copy Nginx config (make sure it's inside frontend folder or adjust path)
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]



