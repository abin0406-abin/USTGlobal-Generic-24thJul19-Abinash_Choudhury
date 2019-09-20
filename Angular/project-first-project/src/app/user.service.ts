import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
//or //@Inject , Componet object- provider
export class  UserService {
    users = [
        {
            name: 'Abinash',
            company: 'UST Global'
        },
        {
            name: 'Karan',
            company: 'Cognizant'
        },
        {
            name: 'Balakrishna',
            company: 'UST'
        }   
    ];
    printDetails(){
        console.log('The function running means service is running.')
    }    
}