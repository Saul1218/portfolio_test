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
    code: `<?php
// Sitio Web de Gestión de Banquetes
// Sistema completo para administración de eventos

class BanquetManager {
    private $db;
    
    public function __construct($database) {
        $this->db = $database;
    }
    
    // Crear nuevo evento
    public function createEvent($eventData) {
        $sql = "INSERT INTO events (name, date, guests, venue, budget, status) 
                VALUES (?, ?, ?, ?, ?, 'pending')";
        
        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            $eventData['name'],
            $eventData['date'],
            $eventData['guests'],
            $eventData['venue'],
            $eventData['budget']
        ]);
    }
    
    // Obtener eventos por fecha
    public function getEventsByDate($startDate, $endDate) {
        $sql = "SELECT * FROM events 
                WHERE date BETWEEN ? AND ? 
                ORDER BY date ASC";
        
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$startDate, $endDate]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    // Calcular costos del evento
    public function calculateEventCost($eventId) {
        $sql = "SELECT 
                    e.guests,
                    e.venue,
                    SUM(s.price * es.quantity) as service_cost
                FROM events e
                LEFT JOIN event_services es ON e.id = es.event_id
                LEFT JOIN services s ON es.service_id = s.id
                WHERE e.id = ?
                GROUP BY e.id";
        
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$eventId]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        // Cálculo de costos base
        $baseCost = $result['guests'] * 50; // Costo por persona
        $serviceCost = $result['service_cost'] ?? 0;
        $venueCost = $this->getVenueCost($result['venue']);
        
        return [
            'base_cost' => $baseCost,
            'service_cost' => $serviceCost,
            'venue_cost' => $venueCost,
            'total_cost' => $baseCost + $serviceCost + $venueCost
        ];
    }
    
    // Gestión de disponibilidad
    public function checkAvailability($date, $venue) {
        $sql = "SELECT COUNT(*) as count 
                FROM events 
                WHERE date = ? AND venue = ? AND status != 'cancelled'";
        
        $stmt = $this->db->prepare($sql);
        $stmt->execute([$date, $venue]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        
        return $result['count'] == 0;
    }
    
    private function getVenueCost($venue) {
        $venuePrices = [
            'salon_principal' => 1500,
            'salon_secundario' => 800,
            'terraza' => 1200,
            'jardin' => 1000
        ];
        
        return $venuePrices[$venue] ?? 0;
    }
}

// Frontend JavaScript para interactividad
?>

<script>
class EventCalendar {
    constructor() {
        this.currentDate = new Date();
        this.events = [];
        this.init();
    }
    
    init() {
        this.renderCalendar();
        this.bindEvents();
        this.loadEvents();
    }
    
    renderCalendar() {
        const calendar = document.getElementById('calendar');
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        
        // Generar días del mes
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        
        let calendarHTML = '<div class="calendar-grid">';
        
        // Días de la semana
        const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
        dayNames.forEach(day => {
            calendarHTML += \`<div class="day-header">\${day}</div>\`;
        });
        
        // Espacios vacíos para el primer día
        for (let i = 0; i < firstDay; i++) {
            calendarHTML += '<div class="empty-day"></div>';
        }
        
        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = \`\${year}-\${String(month + 1).padStart(2, '0')}-\${String(day).padStart(2, '0')}\`;
            const hasEvent = this.events.some(event => event.date === dateStr);
            
            calendarHTML += \`
                <div class="calendar-day \${hasEvent ? 'has-event' : ''}" 
                     data-date="\${dateStr}">
                    \${day}
                    \${hasEvent ? '<div class="event-indicator"></div>' : ''}
                </div>
            \`;
        }
        
        calendarHTML += '</div>';
        calendar.innerHTML = calendarHTML;
    }
    
    bindEvents() {
        // Navegación del calendario
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
            this.renderCalendar();
        });
        
        document.getElementById('nextMonth').addEventListener('click', () => {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
            this.renderCalendar();
        });
        
        // Click en días del calendario
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('calendar-day')) {
                const date = e.target.dataset.date;
                this.showEventsForDate(date);
            }
        });
    }
    
    async loadEvents() {
        try {
            const response = await fetch('/api/events');
            this.events = await response.json();
            this.renderCalendar();
        } catch (error) {
            console.error('Error loading events:', error);
        }
    }
    
    showEventsForDate(date) {
        const dayEvents = this.events.filter(event => event.date === date);
        const modal = document.getElementById('eventModal');
        const eventList = document.getElementById('eventList');
        
        if (dayEvents.length > 0) {
            eventList.innerHTML = dayEvents.map(event => \`
                <div class="event-item">
                    <h4>\${event.name}</h4>
                    <p>Invitados: \${event.guests}</p>
                    <p>Lugar: \${event.venue}</p>
                    <p>Estado: \${event.status}</p>
                </div>
            \`).join('');
        } else {
            eventList.innerHTML = '<p>No hay eventos programados para esta fecha.</p>';
        }
        
        modal.style.display = 'block';
    }
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    new EventCalendar();
});
</script>`
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
