# Base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Environment variable for connection string
ENV ConnectionStrings__cadenaSql="Server=192.168.1.4,1433;Database=Hospedaje;User Id=soporte;Password=soporte1406;TrustServerCertificate=True;"

# Build image
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY . .
RUN dotnet restore "HospedajeApi/HospedajeApi.csproj"
WORKDIR "/src/HospedajeApi"
RUN dotnet build "HospedajeApi.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Publish image
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "HospedajeApi.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HospedajeApi.dll"]
