import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import UserModule from '~/store/usermodule';

let userModuleStore: UserModule;

function initialiseStores(store: Store<any>): void {
    userModuleStore = getModule(UserModule, store);
}

export { initialiseStores, userModuleStore };