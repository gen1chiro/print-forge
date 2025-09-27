import modelsData from '@/data/models.json';
import type { Model } from '@/types';

export const getModels = async (): Promise<Model[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(modelsData);
        }, 100);
    });
}

export const getModelById = async (id: number): Promise<Model> => {
    const model = modelsData.find((model) => model.id === id);

    if (!model) {
        throw new Error('No model with id ' + id);
    }

    return model;
}