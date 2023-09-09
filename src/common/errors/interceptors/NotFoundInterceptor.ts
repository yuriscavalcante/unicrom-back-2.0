import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  NotFoundException,
} from '@nestjs/common';
import { catchError, Observable } from 'rxjs';
import { BadRequestError } from '../types/BadRequestError';

@Injectable()
export class NotFoundInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof BadRequestError) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
