import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, OutputFormat } from "aws-cdk-lib/aws-lambda-nodejs";

const path = require("path");

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const listMovieFunction = new lambda.DockerImageFunction(
      this,
      "listMovieFunction",
      {
        functionName: "listMovieFunction",
        code: lambda.DockerImageCode.fromImageAsset(
          path.join(__dirname, "../"),
          {
            cmd: ["GetMeasurement.handler"],
            entrypoint: ["/lambda-entrypoint.sh"],
          }
        ),
      }
    );

    const getmeasurement = new NodejsFunction(this, "getmeasurement", {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "src/lambdas/GetMeasurement.ts",
      bundling: {
        format: OutputFormat.ESM,
      },
    });

    const createsurveyqualtrics = new NodejsFunction(
      this,
      "createsurveyqualtrics",
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        entry: "src/lambdas/CreateSurveyQualtrics.ts",
        bundling: {
          format: OutputFormat.ESM,
        },
      }
    );

    const getresults = new NodejsFunction(this, "getresults", {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "src/lambdas/GetResults.ts",
      bundling: {
        format: OutputFormat.ESM,
      },
    });

    const jiradatasync = new NodejsFunction(this, "jiradatasync", {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "src/lambdas/JiraDataSync.ts",
      bundling: {
        format: OutputFormat.ESM,
      },
    });

    const qualtricsdatasync = new NodejsFunction(this, "qualtricsdatasync", {
      runtime: lambda.Runtime.NODEJS_18_X,
      entry: "src/lambdas/QualtricsDataSync.ts",
      bundling: {
        format: OutputFormat.ESM,
      },
    });
  }
}
