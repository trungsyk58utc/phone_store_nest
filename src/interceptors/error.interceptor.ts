import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { QueryFailedError } from 'typeorm';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  constructor(private repository: Repository<any>) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof QueryFailedError) {
          // Handle and log the error from the repository
          console.error('Database error:', error.message);
          return throwError('Internal server error');
        }

        return throwError(error);
      }),
    );
  }
}
