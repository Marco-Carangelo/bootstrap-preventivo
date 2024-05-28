MILESTONE 1. Richiesta preventivo.

1. Gestione del codice sconto
Il primo evento da gestire nella pagina è il campo del codice promozionale. Questo perchè vogliamo che il codice sia validato prima che l'utente invii il form. In caso contrario, se un utente in possesso di un codice valido sbagliasse a digitare, lo potremmo avvisare solo a calcolo già avvenuto, quindi si può ipotizzare che l'utente procederebbe ad un secondo invio con il codice corretto, creando così due calcoli con risultati diversi.

Creeremo una funzione per validare il codice promozionale che verrà scatenata dal cambiamento del campo relativo nel dom, che visualizzerà un messaggio per allertare l'utente ogni volta che nel campo ci sarà inserita una stringa diversa dai codici validi ed un messaggio per avvisarlo quando verrà inserito un codice corretto. L'etichetta che useremo per informare l'utente sarà inizialmente settata come non visibile, verrà mostrata quando ci sarà qualcosa scritto nel campo e tornerà invisibile se il campo verrà svuotato.
I codici validi saranno contenuti in un array di stringhe e li confronteremo con l'input dell'utente ogni volta che avverrà un cambiamento nel campo. Salveremo il risultato del confronto in una variabile booleana.


2. Programma principale
  I dati necessari per eseguire il programma principale saranno contenuti in un array di oggetti.
 Ogni oggetto rappresenterà un diverso servizio offerto dall'azienda ed avrà come proprietà una descrizione, il costo per ora del servizio ed la durata stimata in ore per quel servizio.
 L'utente selezionerà il tipo di servizio da una lista, tramite un menu dropdown. Ad ogni voce del menu sarà assegnato un valore da 0 ad N che servirà per identificare la posizione di quel servizio all'interno dell'array.
 Una volta individuato il servizio richiesto basterà impostare una funzione che prenda in input l'oggetto in quella posizione dell'array e calcoli il risultato tramite i suoi campi relativi a prezzo e durata.
 Se al momento dell'invio del form c'è un codice sconto valido nell'apposito campo, allora la variabile che abbiamo impostato precedentemente avrà valore vero, in quel caso possiamo calcolare lo sconto ed aggiornare il prezzo, altrimenti rimane quello precedentemente calcolato.

 2.1 Stampa del prezzo
    A questo punto stamperemo a il risultato nella pagina tramite un'apposita funzione che si occuperà di stampare in grassetto i caratteri interi del prezzo ed i caratteri decimali con un font più leggero, limitandoli fino alla seconda cifra dopo lo zero. 
    Per la parte decimale sarà sufficente fare un parseInt del prezzo e stamparlo in un elemento html apposito.
    La parte decimale andrà prima estrapolata usando l'operatore % 1 (in questo modo viene considerata resto solo la parte decimale), moltiplicata per 100 per ottenere due cifre intere. Bisognerà anche usare la funzione padStart che permetterà di aggiungere uno 0  all'inizio della stringa nel caso ottenessimo un risoltato di una sola cifra.

    Ottenuti i due valori da stampare, useremo il metodo .innerHTML e l'interpolazione in modo da poter stampare in una sola volta la parte intera, la parte decimale, la virgola che li separa e l'elemento HTML Small che conterrà la parte decimale e ne cambierà la formattazione.

3. Popolazione del menu Select
 Per popolare dinamicamente il menu select possiamo utilizzare l'array di oggetti che abbiamo impostato in precedenza.
 Inizialmente il menù conterrà solo il valore di default che funge da placeholder.
 Possiamo impostare una funzione che prenda in esame gli oggetti relativi ai vari servizi tramite un ciclo For con un indice che parte da 0 fino alla lunghezza dell'array-1, in modo da iterare su tutti i suoi elementi.

 Per ogni iterazione salveremo i riferimenti all'elemento corrente in una variabile, dopodichè creeremo un elemento HTML option e gli assegneremo come contenuto testuale la descrizione del servizio, che sarà contenuta in una proprietà dell'oggetto in esame. Come valore dell'option invece andremo ad assegnare il valore corrente dell'indice del ciclo, in modo che ci sia sempre una corrispondenza tra la posizione dell'oggetto nell'array e la sua posizione nella lista dell'elemento HTML select.