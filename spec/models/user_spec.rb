require 'rails_helper'

RSpec.describe User, type: :model do
  subject {
    described_class.new(email: 'admin@admin.com', password: 'password')
  }

  it "has valid email and password" do
    expect(subject).to be_valid
  end

  it "is not valid without a password" do
    subject.password = nil
    expect(subject).to_not be_valid
  end

  it "is not valid witout email" do
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it "is must have valid email" do
    expect(subject.email).to match(/\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i)
  end
end
