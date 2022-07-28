import { Observable } from "rxjs";

const observableAlfa$ = new Observable(subscriber => {
    subscriber.next(1);
    /* a=b */
    subscriber.next(2);
    subscriber.next(20);
    subscriber.next('curso');
    subscriber.next({test: true});
    subscriber.complete();
    subscriber.next(6);
});

const observer = {
    next: (value) =>{ 
        console.log(value); //imprime cada uno de los next
    },
    complete: () => {
        console.log('obsevable complete');
    },
    error: (error) => {
        console.log('erro recibido');
        console.error(error); 
    }
}

observableAlfa$.subscribe(observer);