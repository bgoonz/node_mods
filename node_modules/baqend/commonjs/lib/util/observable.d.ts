import { Observable as ObservableType, Subscription as SubscriptionType, Subscriber as SubscriberType } from 'rxjs';
declare type Observable<T> = ObservableType<T>;
declare type Subscription = SubscriptionType;
declare type Subscriber<R> = SubscriberType<R>;
declare const Observable: typeof ObservableType, Subscription: typeof SubscriberType, Subscriber: typeof SubscriberType;
export { Observable, Subscription, Subscriber };
