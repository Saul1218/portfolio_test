export const projectsData = [
  {
    id: 1,
    title: {
      es: 'Sitio Web de Gestión de Banquetes',
      en: 'Banquet Management Website'
    },
    description: {
      es: 'Desarrollo de sitio web dinámico para gestión completa de eventos y banquetes con funcionalidades avanzadas.',
      en: 'Development of dynamic website for complete event and banquet management with advanced functionalities.'
    },
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    color: 'blue',
    github: 'https://github.com/Saul1218/Sistema-de-Gestion-de-Banquetes',
    demo: 'https://www.youtube.com/?gl=AR',
    
  },
  {
    id: 2,
    title: {
      es: 'Algoritmo TSP (Problema del Viajante)',
      en: 'TSP Algorithm (Traveling Salesman Problem)'
    },
    description: {
      es: 'Implementación del Problema del Viajante para optimizar recorridos en escenarios logísticos simulados usando Python.',
      en: 'Implementation of the Traveling Salesman Problem to optimize routes in simulated logistics scenarios using Python.'
    },
    image: 'https://i.postimg.cc/FsycZj82/TSP-imagen.png',
    technologies: ['Python', 'NumPy', 'Matplotlib', 'Algoritmos'],
    color: 'cyan',
    github: 'https://github.com/Saul1218/TSP-Travelling-Salesman-Problem',
    demo: 'https://www.youtube.com/?gl=AR',
    code: `import matplotlib.pyplot as plt
import numpy as np
import random

# Número de bases (incluyendo la base central)
n_bases = 10

# Generar posiciones aleatorias en 2D (coordenadas de las bases)
np.random.seed(42)
bases = np.random.rand(n_bases, 2) * 100  # Coordenadas en un área de 100x100

# Calcular matriz de distancias
def distancia(ciudad1, ciudad2):
    return np.linalg.norm(ciudad1 - ciudad2)

dist_matrix = np.array([[distancia(bases[i], bases[j]) for j in range(n_bases)] for i in range(n_bases)])

# Algoritmo del vecino más cercano
def tsp_vecino_mas_cercano(dist_matrix):
    n = len(dist_matrix)
    visitado = [False] * n
    ruta = [0]  # Empezamos en la base 0
    visitado[0] = True
    actual = 0

    for _ in range(n - 1):
        # Buscar la ciudad más cercana no visitada
        distancias = [(i, dist_matrix[actual][i]) for i in range(n) if not visitado[i]]
        siguiente, _ = min(distancias, key=lambda x: x[1])
        ruta.append(siguiente)
        visitado[siguiente] = True
        actual = siguiente

    ruta.append(0)  # Volver a la base
    return ruta

# Obtener ruta óptima aproximada
ruta_optima = tsp_vecino_mas_cercano(dist_matrix)

# Visualización
plt.figure(figsize=(10, 8))
for i in range(n_bases):
    plt.scatter(bases[i][0], bases[i][1], c='red')
    plt.text(bases[i][0]+1, bases[i][1]+1, f'Base {i}', fontsize=9)

# Dibujar ruta
for i in range(len(ruta_optima) - 1):
    origen = bases[ruta_optima[i]]
    destino = bases[ruta_optima[i + 1]]
    plt.plot([origen[0], destino[0]], [origen[1], destino[1]], 'b-')

plt.title("Ruta óptima para distribución de suministros (TSP militar)")
plt.xlabel("Coordenada X")
plt.ylabel("Coordenada Y")
plt.grid(True)
plt.show() `
  }
];
