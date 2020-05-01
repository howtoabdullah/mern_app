const timestamp = (schema) => {
  schema.add({
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  });

  schema.pre('save', () => {
    const now = Date.now();

    this.updatedAt = now;
    if (!this.createdAt) {
      this.createdAt = now;
    }
  });
};

export default timestamp;
