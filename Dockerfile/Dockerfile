# Gunakan base image Nginx yang ringan

FROM nginx:alpine


# Salin file HTML, CSS, dan JavaScript ke direktori default Nginx

COPY index.html /usr/share/nginx/html/

COPY style.css /usr/share/nginx/html/

COPY script.js /usr/share/nginx/html/

# Jika ada direktori 'tests' yang ingin ikut disajikan (opsional)

# COPY tests/ /usr/share/nginx/html/tests/


# Expose port 80

EXPOSE 80


# Perintah default untuk menjalankan Nginx

CMD ["nginx", "-g", "daemon off;"]