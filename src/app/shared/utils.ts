import { Subscription } from 'rxjs';
import { LanguageProps } from './definitions';

export const isRTL = (props: LanguageProps| undefined): boolean => props?.rtl || false;

export function destroySubscriptions(subscriptions: Array<Subscription>): void {
    subscriptions?.forEach(_ => _.unsubscribe());
}
