document.addEventListener('DOMContentLoaded', () => {
    // Definición de la malla curricular con sus requisitos
    const curriculum = {
        'Semestre 1': [
            { id: 'biologia-celular', name: 'Biología Celular', requisites: [] },
            { id: 'morfologia-i', name: 'Morfología Micro y Macroscópica I', requisites: [] },
            { id: 'matematicas', name: 'Matemáticas', requisites: [] },
            { id: 'intro-vet', name: 'Introducción a la Medicina Veterinaria', requisites: [] },
            { id: 'ingles-i', name: 'Inglés I', requisites: [] },
            { id: 'habilidades-i', name: 'Habilidades Académicas I', requisites: [] }
        ],
        'Semestre 2': [
            { id: 'quimica-bioquimica', name: 'Química y Bioquímica para la vida', requisites: ['biologia-celular'] },
            { id: 'morfologia-ii', name: 'Morfología Micro y Macroscópica II', requisites: ['morfologia-i'] },
            { id: 'genetica-animal', name: 'Genética Animal', requisites: ['matematicas'] },
            { id: 'zoologia', name: 'Zoología', requisites: [] },
            { id: 'ingles-ii', name: 'Inglés II', requisites: ['ingles-i'] },
            { id: 'habilidades-ii', name: 'Habilidades Académicas II', requisites: ['habilidades-i'] }
        ],
        'Semestre 3': [
            { id: 'fisio-i', name: 'Fisiología y Fisiopatología Veterinaria I', requisites: ['quimica-bioquimica'] },
            { id: 'agentes-biologicos', name: 'Agentes Biológicos de Enfermedad', requisites: [] },
            { id: 'bioestadistica', name: 'Bioestadística', requisites: ['matematicas'] },
            { id: 'admin-empresas', name: 'Administración de Empresas', requisites: [] },
            { id: 'ecologia', name: 'Ecología', requisites: ['zoologia'] },
            { id: 'ingles-iii', name: 'Inglés III', requisites: ['ingles-ii'] },
            { id: 'etica-ciudadania', name: 'Ética y Ciudadanía', requisites: [] }
        ],
        'Semestre 4': [
            { id: 'fisio-ii', name: 'Fisiología y Fisiopatología Veterinaria II', requisites: ['fisio-i'] },
            { id: 'inmunologia', name: 'Inmunología General', requisites: ['agentes-biologicos'] },
            { id: 'formulacion-proyectos', name: 'Formulación y Evaluación de Proyectos', requisites: ['admin-empresas'] },
            { id: 'modulo-investigacion-i', name: 'Modulo de Investigación e Integración I', requisites: [] },
            { id: 'ingles-iv', name: 'Inglés IV', requisites: ['ingles-iii'] },
            { id: 'responsabilidad-social', name: 'Responsabilidad Social Universitaria', requisites: ['etica-ciudadania'] },
            { id: 'practica-i', name: 'Práctica Integrada I en Medicina Veterinaria', requisites: ['morfologia-ii'] }
        ],
        'Semestre 5': [
            { id: 'patologia-veterinaria', name: 'Patología Veterinaria', requisites: ['fisio-ii'] },
            { id: 'enfermedades-infecciosas', name: 'Enfermedades infecciosas y Parasitarias', requisites: ['inmunologia'] },
            { id: 'epidemiologia', name: 'Epidemiología', requisites: ['bioestadistica'] },
            { id: 'nutricion-animal', name: 'Nutrición y Alimentación Animal', requisites: ['fisio-ii'] }, // Se ajusta el requisito a fisiología II
            { id: 'bioetica-bienestar', name: 'Bioética y Bienestar animal', requisites: ['ecologia'] },
            { id: 'practica-ii', name: 'Práctica Integrada II en Medicina', requisites: ['practica-i'] }
        ],
        'Semestre 6': [
            { id: 'farmacologia-veterinaria', name: 'Farmacología Veterinaria', requisites: ['patologia-veterinaria'] },
            { id: 'semiologia', name: 'Semiología', requisites: ['fisio-ii'] },
            { id: 'salud-publica', name: 'Salud Pública Veterinaria', requisites: ['enfermedades-infecciosas', 'epidemiologia'] },
            { id: 'produccion-animal', name: 'Bases de producción Animal Sustentable', requisites: ['nutricion-animal'] },
            { id: 'biologia-conservacion', name: 'Biología y Conservación de Especies', requisites: ['bioetica-bienestar'] },
            { id: 'practica-iii', name: 'Práctica Integrada III en Medicina', requisites: ['practica-ii'] }
        ],
        'Semestre 7': [
            { id: 'reproduccion-animal', name: 'Reproducción y Obstetricia Animal', requisites: ['farmacologia-veterinaria', 'fisio-ii', 'semiologia'] },
            { id: 'imagenologia-diagnostica', name: 'Imagenología Diagnóstica', requisites: ['semiologia'] },
            { id: 'inocuidad-calidad', name: 'Inocuidad y Calidad Alimentaria', requisites: ['salud-publica'] },
            { id: 'produccion-rumiantes', name: 'Producción de Rumiantes', requisites: ['produccion-animal'] },
            { id: 'manejo-fauna', name: 'Manejo y Conservación de Fauna Silvestre', requisites: ['biologia-conservacion'] },
            { id: 'practica-iv', name: 'Práctica Integrada IV en Medicina', requisites: ['practica-iii'] }
        ],
        'Semestre 8': [
            { id: 'hematologia-bioquimica', name: 'Hematología y Bioquímica Clínica', requisites: ['semiologia'] },
            { id: 'medicina-animales-compania', name: 'Medicina Interna de animales de compañía', requisites: ['imagenologia-diagnostica'] },
            { id: 'inspeccion-veterinaria', name: 'Inspección Veterinaria', requisites: ['inocuidad-calidad'] },
            { id: 'produccion-patologia-aviar', name: 'Producción y Patología Aviar', requisites: ['patologia-veterinaria', 'produccion-animal', 'produccion-rumiantes'] },
            { id: 'legislacion-ambiental', name: 'Legislación y Evaluación de Impacto Ambiental', requisites: ['manejo-fauna'] },
            { id: 'modulo-investigacion-ii', name: 'Módulo de Investigación e Integración II', requisites: ['modulo-investigacion-i'] },
            { id: 'practica-v', name: 'Práctica Integrada V en Medicina', requisites: ['practica-iv'] }
        ],
        'Semestre 9': [
            { id: 'cirugia-veterinaria', name: 'Cirugía Veterinaria', requisites: ['farmacologia-veterinaria', 'medicina-animales-compania'] },
            { id: 'medicina-animales-mayores', name: 'Medicina Interna de animales mayores', requisites: ['medicina-animales-compania'] },
            { id: 'internado-salud-publica', name: 'Internado de Salud pública', requisites: ['inspeccion-veterinaria'] },
            { id: 'acuicultura-patologia', name: 'Acuicultura y Patología de Peces', requisites: ['legislacion-ambiental', 'produccion-rumiantes'] },
            { id: 'internado-conservacion', name: 'Internado de Conservación y Biodiversidad', requisites: ['legislacion-ambiental'] },
            { id: 'trabajo-titulacion-i', name: 'Trabajo de Titulación I', requisites: [] },
            { id: 'electivo-formacion-i', name: 'Electivo de Formación General I', requisites: [] }
        ],
        'Semestre 10': [
            { id: 'internado-quirurgico', name: 'Internado Quirúrgico', requisites: ['cirugia-veterinaria'] },
            { id: 'internado-medicina-interna', name: 'Internado de Medicina Interna', requisites: ['medicina-animales-mayores'] },
            { id: 'electivo-profundizacion', name: 'Electivo de Profundización', requisites: [] },
            { id: 'internado-produccion-animal', name: 'Internado de Producción Animal', requisites: ['produccion-rumiantes'] },
            { id: 'trabajo-titulacion-ii', name: 'Trabajo de Titulación II', requisites: ['trabajo-titulacion-i'] },
            { id: 'electivo-formacion-ii', name: 'Electivo de Formación General II', requisites: [] }
        ]
    };

    // Cargar estado de ramos aprobados desde el localStorage
    let approvedSubjects = JSON.parse(localStorage.getItem('approvedSubjects')) || {};

    const curriculumContainer = document.querySelector('.curriculum-container');
    const modal = document.getElementById('requisites-modal');
    const requisitesList = document.getElementById('requisites-list');
    const closeButton = document.querySelector('.close-button');

    // Función para renderizar la malla curricular
    const renderCurriculum = () => {
        curriculumContainer.innerHTML = '';
        const allSubjects = Object.values(curriculum).flat();

        for (const semesterName in curriculum) {
            const semester = document.createElement('div');
            semester.className = 'semester';
            semester.innerHTML = `<h2>${semesterName}</h2><ul class="subject-list"></ul>`;
            
            const subjectList = semester.querySelector('.subject-list');
            curriculum[semesterName].forEach(subject => {
                const subjectItem = document.createElement('li');
                subjectItem.className = 'subject-item';
                subjectItem.dataset.id = subject.id;
                subjectItem.textContent = subject.name;
                
                // Verificar si el ramo está aprobado o bloqueado
                if (approvedSubjects[subject.id]) {
                    subjectItem.classList.add('approved');
                } else {
                    const requisitesMet = subject.requisites.every(reqId => approvedSubjects[reqId]);
                    if (!requisitesMet) {
                        subjectItem.classList.add('blocked');
                    }
                }
                
                subjectList.appendChild(subjectItem);
            });
            curriculumContainer.appendChild(semester);
        }
        
        // Asignar los eventos de clic
        document.querySelectorAll('.subject-item').forEach(item => {
            item.addEventListener('click', handleSubjectClick);
        });
    };

    // Función para manejar el clic en un ramo
    const handleSubjectClick = (event) => {
        const subjectItem = event.target;
        const subjectId = subjectItem.dataset.id;
        
        if (subjectItem.classList.contains('approved')) {
            // Si el ramo ya está aprobado, no hacer nada (o desaprobar)
            // Para este caso, vamos a dejarlo así para simplificar
            return;
        }

        // Encontrar la información del ramo
        const allSubjects = Object.values(curriculum).flat();
        const subjectInfo = allSubjects.find(s => s.id === subjectId);
        
        // Verificar requisitos
        const missingRequisites = subjectInfo.requisites.filter(reqId => !approvedSubjects[reqId]);
        
        if (missingRequisites.length > 0) {
            // Mostrar modal con los requisitos faltantes
            showRequisitesModal(missingRequisites, allSubjects);
        } else {
            // Aprobar el ramo
            approvedSubjects[subjectId] = true;
            localStorage.setItem('approvedSubjects', JSON.stringify(approvedSubjects));
            // Volver a renderizar la malla para actualizar el estado visual
            renderCurriculum();
        }
    };

    // Función para mostrar el modal de requisitos
    const showRequisitesModal = (missingRequisites, allSubjects) => {
        requisitesList.innerHTML = '';
        missingRequisites.forEach(reqId => {
            const reqSubject = allSubjects.find(s => s.id === reqId);
            const li = document.createElement('li');
            li.textContent = reqSubject ? reqSubject.name : reqId;
            requisitesList.appendChild(li);
        });
        modal.style.display = 'flex';
    };

    // Evento para cerrar el modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Inicializar la malla al cargar la página
    renderCurriculum();
});
