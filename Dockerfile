FROM public.ecr.aws/lambda/nodejs:18
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:12

# Copy the Lambda functions
COPY . ${LAMBDA_TASK_ROOT}/

# Install NPM dependencies for function
RUN npm install
RUN npm run build
CMD ["GetMeasurement.handler"]

# FROM public.ecr.aws/lambda/nodejs:18 as builder
# WORKDIR /usr/app
# COPY . ./
# RUN npm install
# RUN npm run build
    
# FROM public.ecr.aws/lambda/nodejs:18
# WORKDIR ${LAMBDA_TASK_ROOT}
# COPY --from=builder /usr/app/dist/src/* ./
# CMD ["test.handler"]

