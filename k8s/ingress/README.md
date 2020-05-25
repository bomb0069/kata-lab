# Kubernetes Config with Ingress

## Architecture

```ditta {cmd=true args=["-E"]}
                                                 _________
                         ___________  dev.local |   DEV   |
http://dev.localhost -> |           |    |----->| Service |
                        |           |    |      | (nginx) |
                        |ingress ctl|----|      |_________|
                        |           |    |       _________
http://sit.localhost -> |           |    |----->|   SIT   |
                        |___________| sit.local | Service |
                                                | (httpd) |
                                                |_________|

```

## Set DNS or Hostname for seperate environment

in host file /etc/hosts

>127.0.0.1    dev.localhost  
>127.0.0.1    sit.localhost

## Create Development and System Integration Namespaces

>kubectl create namespace develop  
>kubectl create namespace sit

## Deploy Application into Namespaces

### Deploy 'Nginx' into development environment

>kubectl --namespace=dev apply -f nginx.yaml

### Deploy 'httpd' into system integration environment

>kubectl --namespace=sit apply -f httpd.yaml

## Deploy Service into Namespaces

### Deploy Service into development and system integration environment

>kubectl --namespace=dev apply -f service.yaml
>kubectl --namespace=sit apply -f service.yaml

## Deploy Ingress into Namespaces

### Deploy Ingress for DEV into development environment

>kubectl --namespace=dev apply -f ingress-dev.yaml

### Deploy Ingress for SIT into system integration environment

>kubectl --namespace=sit apply -f ingress-sit.yaml

## Deploy Ingress-Nginx Controller into new Namespaces

>kubectl apply -f ingress-nginx-ctl-deploy.yaml  
or  
kubectl apply -f <https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-0.32.0/deploy/static/provider/cloud/deploy.yaml>
