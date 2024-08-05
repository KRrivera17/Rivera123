"""
PROGRAMA QUE PERMITE CREAR Y LISTAR
TAREAS (UNIVERSITARIO)
"""
lista_tareas = []
opcion = 0
while opcion != 3:
    print("1. Ver Tarea")
    print("2. Añadir Tarea")
    print("3. Salir del sistema")
    opcion = int(input("Elige: "))
    
    if opcion == 1:
        for i, tarea in enumerate (lista_tareas):
            print(f"{i}. {tarea}" ) 
    elif opcion == 2:
         nueva_tarea = input ("Introduce una tarea para introducir: ")
lista_tareas.append(nueva_tarea)
