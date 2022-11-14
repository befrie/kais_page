---
title: Typescript und statische Typisierung
date: "2022-09-26"
author: Bernd Friedrichs
excerpt: Beispiele für den Nutzen von statischer Typisierung
image: static-typing.jpg
isFeatured: true
---

![TypeScript](/images/posts/typescript/static-typing.jpg "TypeScript Logo")

# Was ist Typescript?

- Die TypeScript Sprache bietet statische Typisierung und fügt der JavaScript Sprache echte objektorientierte Fähigkeiten hinzu
- Der TypeScript Compiler übersetzt TypeScript Code in natives JavaScript. Darüber hinaus bietet er der Programmiererin Unterstützung bei der Erstellung des Code

## Was bringt statische Typisierung?

Die statische Typisierung zwingt die Programmiererin schon bei der Deklaration einer Variablen den Typ festzulegen. Das verhindert, dass willkürliche oder auch unbeabsichtigte Konvertierungen erfolgen, die Fehler verursachen können.
Insbesondere bei komplexeren Datenstrukturen verhindert die Typisierung Fehler, die u. U. schwer zu finden sind.

**Beispiel**

```
function avgAge(persons) {
  let summe = 0;
  let count = 0;

  persons.forEach((p, i) => {
    summe += p.age;
    count++;
  });
  return summe / count;
}

myPersons = [
  { name: "Udo", age: 24 },
  { name: "Reiner", age: 9 },
  { name: "Bärbel", age: "32" },
];

console.log(avgAge(myPersons));

$ node playground.js
1110.6666666666667
```

Man kann sich vorstellen, dass bei einem großen Array nicht immer sofort erkennbar sein könnte, dass ein Wert den falschen Typ hat und somit das Ergebnis verfälschen wird. Fehlt das Alter gar ganz, so wird NaN (not a number) ausgegeben, was u. U. einfacher zu entdecken ist, aber zusätzlich abgeprüft werden muss.

In Typescript werden solche Fehler durch den TypeScript Compiler gemeldet:

```
interface Person {
  name: string;
  age: number;
}

function avgAge(p: Person[]): number {
  let summe = 0;
  let count = 0;

  p.forEach((p: Person) => {
    summe += p.age;
    count++;
  });
  return summe / count;
}

const myPersons: Person[] = [
  { name: "Udo", age: 24 },
  { name: "Reiner", age: 09 },
  { name: "Bärbel", age: "32" },
];

console.log(avgAge(myPersons));

$ tsc playground.ts
playground.ts:20:21 - error TS2322: Type 'string' is not assignable to type 'number'.

20   { name: "Bärbel", age: "32" },
                       ~~~

  playground.ts:3:3
    3   age: number;
        ~~~
    The expected type comes from property 'age' which is declared here on type 'Person'


Found 1 error.
```

Auch das Fehlen einer festgelegten Eigenschaft würde hier eine entsprechende Fehlermeldung zur Folge haben:

```
$ tsc playground.ts
playground.ts:20:3 - error TS2741: Property 'age' is missing in type '{ name: string; }'
but required in type 'Person'.

20   { name: "Bärbel" },
     ~~~~~~~~~~~~~~~~~~

  playground.ts:3:3
    3   age: number;
        ~~~
    'age' is declared here.

```

Im TypeScript Beispiel sieht man, dass man mit dem Schlüsselwort _interface_ einen strukturierten Datentypen vereinbaren und ihm gleichzeitig einen Namen geben kann.

Bei der Funktionsdefinition von _avgAge_ fällt auf, dass zum einen der Typ des erwarteten Parameters angegeben ist, als auch der Ergebnistyp der Funktion. So wird verhindert, dass zur Laufzeit fehlerhafte Parameter übergeben werden und auch die korrekte Verwendung der Funktion - etwa in einem Ausdruck - sichergestellt.

## Objektorientiertes Programmieren

Zunächst schauen wir auf die drei wichtigsten Prinzipien der OOP:

- Verkapselung
- Vererbung
- Polymorphismus

### Verkapselung bzw. Information Hiding

Hier geht es darum, den Benutzer einer Klasse bzw. eines Objektes
nur die Informationen zukommen zu lassen, die er für die Nutzung benötigt. Details der Implementierung werden möglichst nicht nach außen gegeben, damit eine spätere Änderung dieser Details für den Benutzer unwichtig ist, solange die Schnittstelle unverändert bleibt. TypeScript bietet z. B. die Möglichkeit mit dem Schlüsselwort _private_ festzulegen, dass ein Variable nur innerhalb der Klasse bekannt ist.

### Vererbung

TypeScript unterstützt wie auch JavaScript Vererbung. Im Gegensatz zu JavaScript kann aber TypeScript auch von _interfaces_ und _abstrakten Klassen_ erben. Auch Mehrfachvererbung ist in TypeScript via mixins möglich (dazu später mehr).

### Polymorphie

Durch Vererbung wird Polymorphie ermöglicht. Man kann einer Funktion oder Methode Parameter übergeben, die ein Interface implementieren oder die von einer abstrakten Klasse erben. Ein solches Objekt kann also unterschiedlichen konkreten Typs sein.
