## What is Craftista: Celebrating the Art of Origami 

Welcome to Craftista, a unique web platform dedicated to the beautiful and intricate world of origami. Craftista is a place where origami enthusiasts and artists come together to showcase their creations, share their passion, and engage with a like-minded community. Our platform allows users to explore a diverse range of origami art, vote for their favorites, and get inspired by the daily featured origami.

![Simple Design](docs/stage4-02.png)

## The Architecture 

Craftista is not just an origami platform; it's a demonstration of modern web application development and microservices architecture. It leverages multiple backend services, including:

![Craftista Architevture](docs/Craftista-Architecture-SchoolofDevops-CC-BY-NC-SA4.0.jpg "Craftista Architecture")

### My learning path ###

## <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" width="30" height="30" /> Stage 1: Containerization & Optimization

The first step of this project was to package all microservices into containers. Instead of just creating basic Dockerfiles, I focused on making them lightweight, fast, and secure.

### 🚀 Why Multi-stage Builds?
Standard Docker images often include unnecessary clutter (compilers, source code, build tools) that increase the image size and security risks. I implemented **Multi-stage builds** to separate the build environment from the runtime.
1. **Build Stage:** Compiles the code using the full development SDK.
2. **Run Stage:** Copies only the final binary/assets into a smaller image, mostly **Linux Alpine**.

<p align="center">
  <img src="https://github.com/user-attachments/assets/fd7bab98-110e-4fce-a02e-705597e5a47f" width="48%" />
  <img src="https://github.com/user-attachments/assets/0122a402-00d9-4ed2-ab2f-db4bd3b29874" width="48%" />
</p>

**The results speak for themselves:**

| Service | Standard Image | Optimized (Multi-stage) | Space Saved |
| :--- | :--- | :--- | :--- |
| **Catalogue (Python)** | 158 MB | **150 MB** | **5.1%** |
| **Frontend (NodeJS)** | 201 MB | **149 MB** | **25.9%** |
| **Reccomendation (Go)** | 607 MB | **19.3 MB** | **96.8%** |
| **Voting (Java)** | 480 MB | **226 MB** | **52.9%** |

### 🛡️ Security: The "Non-Root" Approach
By default, Docker containers run as the `root` user, which is a significant security vulnerability. If an attacker breaches the application, they could gain full control over the container.
* I added a dedicated `appuser` to every `Dockerfile`.
* The application runs with the least privilege necessary, significantly reducing the potential attack surface.

### 🛠️ Developer Experience
To make the development environment consistent and easy to set up, I orchestrated the entire stack using `docker-compose`. You can spin up all microservices and the database with these commands:

```bash
# Clone the repo
git clone https://github.com/twoj-nick/craftista.git

# Build and start all services
docker-compose up --build

# Run script for db data creation
docker-compose exec catalogue python db.create.py  






