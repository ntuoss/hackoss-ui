import { validate, validators } from 'validate.js';

interface TimeValidatorOptions {
    timeAttribute: string;
    message?: string;
}

interface ArrayValidatorOptions {
    constraints: any;
}

interface MapValidatorOptions {
    constraints: any;
}

validators.beforeTime = (time: Date, options: TimeValidatorOptions, key: string, attributes: any) => {
    const otherTime = attributes[options.timeAttribute];
    if (time >= otherTime) {
        return options.message || `${options.timeAttribute} is after ${key}`;
    }
};

validators.afterTime = (time: Date, options: TimeValidatorOptions, key: string, attributes: any) => {
    const otherTime = attributes[options.timeAttribute];
    if (time <= otherTime) {
        return options.message || `${options.timeAttribute} is before ${key}`;
    }
};

validators.array = (value: any[], options: ArrayValidatorOptions, key: string, attributes: any) => {
    return value.map(v => validate(v, options.constraints));
};

validators.object = (value: any, options: MapValidatorOptions, key: string, attributes: any) => {
    return validate(value, options.constraints);
};
