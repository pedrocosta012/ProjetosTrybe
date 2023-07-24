import { stub, restore } from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { describe, it, afterEach } from 'mocha';

import { validMotorcycle, validMotorcycleList } from '../Mock/motorcycleMockData';
import MotorcyclesService from '../../../src/Services/motorcycles.service';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

describe('Valida a camada de Services para todas as rotas de "/motorcycle"', () => {
  afterEach(() => { restore(); });

  it('Verifica se é possível cadastrar uma moto com sucesso', async () => {
    const randomId = 'jisncoaswbdchajsbd';
    const modelResponse = { _id: randomId, ...validMotorcycle };
    const wishedResponse = { id: randomId, ...validMotorcycle };
    stub(Model, 'create').resolves(modelResponse);

    const service = new MotorcyclesService();
    const processedResponse = await service.registerNewMotorcycles(validMotorcycle);

    expect(processedResponse._id).to.be.equal(wishedResponse.id);
    expect(processedResponse.buyValue).to.be.equal(wishedResponse.buyValue);
    expect(processedResponse.category).to.be.equal(wishedResponse.category);
    expect(processedResponse.color).to.be.equal(wishedResponse.color);
    expect(processedResponse.engineCapacity).to.be.equal(wishedResponse.engineCapacity);
    expect(processedResponse.model).to.be.equal(wishedResponse.model);
    expect(processedResponse.status).to.be.equal(wishedResponse.status);
    expect(processedResponse.year).to.be.equal(wishedResponse.year);
  });

  it('Verifica se é possível buscar todas as motos', async () => {
    const modelResponse: IMotorcycle[] = [];
    const wishedResponse: IMotorcycle[] = [];

    validMotorcycleList.forEach((car, i) => {
      const generatedId = `idDeTeste${i}`;
      modelResponse.push({ _id: generatedId, ...car });
      wishedResponse.push({ id: generatedId, ...car });
    });

    stub(Model, 'find').resolves(modelResponse);
    
    const service = new MotorcyclesService();
    const processedResponse = await service.findAllMotorcycles() as IMotorcycle[];

    processedResponse.forEach((processedMotorcycle, i) => {
      expect(processedMotorcycle.id).to.be.equal(wishedResponse[i].id);
      expect(processedMotorcycle.buyValue).to.be.equal(wishedResponse[i].buyValue);
      expect(processedMotorcycle.color).to.be.equal(wishedResponse[i].color);
      expect(processedMotorcycle.category).to.be.equal(wishedResponse[i].category);
      expect(processedMotorcycle.model).to.be.equal(wishedResponse[i].model);
      expect(processedMotorcycle.engineCapacity).to.be.equal(wishedResponse[i].engineCapacity);
      expect(processedMotorcycle.status).to.be.equal(wishedResponse[i].status);
      expect(processedMotorcycle.year).to.be.equal(wishedResponse[i].year);
    });
  });
});
