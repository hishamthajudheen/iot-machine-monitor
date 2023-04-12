from sqlalchemy import Column, Integer, String
from database import Base

class IotMonitor(Base):
    __tablename__ = "usercredentials"
    id = Column(Integer,primary_key=True, index=True)
    user_name = Column(String)
    user_email = Column(String)
    user_password = Column(String)