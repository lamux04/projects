# CURSO GIT
## Comandos básicos
- Iniciar un repositorio: `git init`
- Ver el estado de un repositorio: `git status`
- Pasar a stating area: `git add ficheros`
- Confirmar los cambios: `git commit -m "¿que cambios hemos hecho?"`
- Configurar git:
    - Correo: `git config --global user.email "correo@gmail.com"`
    - Usuario: `git config --global user.name "nombre_de_usuario"`
- Ver commits: `git log`
- Volver a un commit anterior: `git checkout iniciales_version`
- Para volver al ultimo commit: `git checkout master`
- Para resetear una versión anterior (se pierden los commits pero no los cambios): `git reset iniciales_version`
- Para resetear una version anterior (perdiendo los cambios de los commits hechos posteriormente): `git reset --hard iniciales_version`
- Para recuperar un fichero borrado: `git restore fichero`
- Borrar repositorio de git en local: `rm -rf repositorio`

## Conectar con github
- Conectar con servidor github: `git remote add origin ....`
- Mostrar servidores: `git remote -v`
- Eliminar servidores: `git remote rm origin`
- Subir repositorio a github: `git push -u origin rama`
- Clonar repositorio github: `git clone ...`

## Clave SSH
https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
- `ssh-keygen -t ed25519 -C "your_email@example.com"`
- Conectar clave ssh con github
- ssh-agent: `eval "$(ssh-agent -s)"` y `ssh-add ~/.ssh/id_ed25519`

## Pull Request
- Crear rama: `git ckeckout -b nombre_rama` (Normalmente features-...)
- Ver ramas: git branch
- Ver git log rapido: `git log --oneline`
- Push con otra rama: `git push -u origin nombre_rama`
- Cambiar rama: `git checkout nombre_rama`