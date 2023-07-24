import { model, models, Schema, FilterQuery, UpdateQuery, Model } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;

  constructor(private modelName: string, private schema: Schema) {
    this.model = models[this.modelName] || model<T>(this.modelName, this.schema);
  }

  async create(document: T): Promise<T> {
    const documentCreated = await this.model.create(document);
    return documentCreated;
  }

  async find(query: FilterQuery<T>): Promise<T[]> {
    const documentsFound = await this.model.find(query);
    return documentsFound;
  }

  async findById(id: string): Promise<unknown> {
    const documentsFound = await this.model.findById(id);
    return documentsFound === null ? undefined : documentsFound;
  }

  async update(id: string, update: UpdateQuery<T>): Promise<unknown> {
    const updatedDocument = await this.model.findByIdAndUpdate(id, update, { new: true });
    return updatedDocument === null ? undefined : updatedDocument;
  }

  async delete(query: FilterQuery<T>): Promise<unknown> {
    const deletedDocument = await this.model.findOneAndRemove(query);
    return deletedDocument;
  }
}
