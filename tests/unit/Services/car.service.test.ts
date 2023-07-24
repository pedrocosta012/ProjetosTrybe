import { stub, restore } from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { describe, it, afterEach } from 'mocha';

import CarsService from '../../../src/Services/cars.service';
import { validCar, listOfCars } from '../Mock/carMockData';
import ICar from '../../../src/Interfaces/ICar';

describe('Valida a camada de Services para todas as rotas de "/cars"', () => {
  afterEach(() => {
    restore();
  });

  it('Verifica se é possível cadastrar um carro com sucesso', async () => {
    const generatedId = 'vbehvasdlnvbawebsc';
    const modelResponse = { _id: generatedId, ...validCar };
    const wishedResponse = { id: generatedId, ...validCar };
    stub(Model, 'create').resolves(modelResponse);
    
    const service = new CarsService();
    const processedResponse = await service.createNewCars(validCar) as ICar;

    expect(processedResponse.id).to.be.equal(wishedResponse.id);
    expect(processedResponse.buyValue).to.be.equal(wishedResponse.buyValue);
    expect(processedResponse.color).to.be.equal(wishedResponse.color);
    expect(processedResponse.doorsQty).to.be.equal(wishedResponse.doorsQty);
    expect(processedResponse.model).to.be.equal(wishedResponse.model);
    expect(processedResponse.seatsQty).to.be.equal(wishedResponse.seatsQty);
    expect(processedResponse.status).to.be.equal(wishedResponse.status);
    expect(processedResponse.year).to.be.equal(wishedResponse.year);
  });

  it('Verifica se é possível buscar todos os carros', async () => {
    const generatedId = 'idDeTeste';
    const modelResponse: ICar[] = [];
    const wishedResponse: ICar[] = [];

    listOfCars.forEach((car, i) => {
      const formattedId = `${generatedId}${i}`;
      modelResponse.push({ _id: formattedId, ...car });
      wishedResponse.push({ id: formattedId, ...car });
    });

    stub(Model, 'find').resolves(modelResponse);
    
    const service = new CarsService();
    const processedResponse = await service.findAllCars() as ICar[];

    processedResponse.forEach((processedCar, i) => {
      expect(processedCar.id).to.be.equal(wishedResponse[i].id);
      expect(processedCar.buyValue).to.be.equal(wishedResponse[i].buyValue);
      expect(processedCar.color).to.be.equal(wishedResponse[i].color);
      expect(processedCar.doorsQty).to.be.equal(wishedResponse[i].doorsQty);
      expect(processedCar.model).to.be.equal(wishedResponse[i].model);
      expect(processedCar.seatsQty).to.be.equal(wishedResponse[i].seatsQty);
      expect(processedCar.status).to.be.equal(wishedResponse[i].status);
      expect(processedCar.year).to.be.equal(wishedResponse[i].year);
    });
  });
});
